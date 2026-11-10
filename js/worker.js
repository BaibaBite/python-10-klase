/* Python executes inside a dedicated worker, never in the page's main thread. */
let pyodide;
async function initialize(){
  if (!pyodide) {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');
    pyodide = await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});
  }
}
self.onmessage = async ({data}) => {
  const {id,code,inputs=[]}=data;
  try {
    await initialize();
    pyodide.globals.set('__student_code',String(code));
    pyodide.globals.set('__student_inputs',inputs.map(String));
    const result=await pyodide.runPythonAsync(`
import sys, io, builtins, traceback
_out = io.StringIO()
_err = io.StringIO()
_old_stdout, _old_stderr, _old_input = sys.stdout, sys.stderr, builtins.input
_items = iter(__student_inputs)
def _student_input(prompt=''):
    try:
        return next(_items)
    except StopIteration:
        raise EOFError('Nepietiek ievades datu. Norādi testa ievades vērtības.')
try:
    sys.stdout, sys.stderr = _out, _err
    builtins.input = _student_input
    _scope = {'__name__':'__main__'}
    exec(compile(__student_code, '<skolena_kods>', 'exec'), _scope)
except BaseException:
    traceback.print_exc(file=_err)
finally:
    sys.stdout, sys.stderr, builtins.input = _old_stdout, _old_stderr, _old_input
(_out.getvalue()[:30000], _err.getvalue()[:6000])
`);
    const output=result.get(0), error=result.get(1);
    result.destroy();
    self.postMessage({id,output,error});
  } catch(err) {self.postMessage({id,output:'',error:String(err)});}
};
