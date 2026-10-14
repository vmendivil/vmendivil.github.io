from pathlib import Path
import subprocess,os,time,urllib.request,socket,sys
p=Path(__file__).resolve().parent;(p/'parent-closure/confirmation').mkdir(parents=True,exist_ok=True);status=0;port=9600+int(p.name[:2]);s=socket.socket();s.bind(('127.0.0.1',port));s.close()
server=subprocess.Popen(['python3','-m','http.server',str(port),'--bind','127.0.0.1','--directory',str(p)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
 for i in range(50):
  try:urllib.request.urlopen(f'http://127.0.0.1:{port}/').close();break
  except OSError:time.sleep(.1)
 for name in sys.argv[1:] or ['PARENT_VERIFY.cjs']:
  a=subprocess.run(['node',str(p/name)],env={**os.environ,'LP_NUM_THREADS':'2','PHASE':'confirmation'},capture_output=True,text=True,timeout=360)
  out=p/'parent-closure'/('confirmation-'+name+'-stdout.txt');out.write_text(a.stdout+a.stderr)
  print(name,a.returncode,a.stdout[-3500:],a.stderr,flush=True);status=max(status,a.returncode)
finally:server.terminate();server.wait()
sys.exit(status)
