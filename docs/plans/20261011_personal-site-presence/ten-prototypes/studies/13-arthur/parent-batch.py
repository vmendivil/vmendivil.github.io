"""pending-13-15: bounded loopback verification; no installs or public assembly."""
from pathlib import Path
import subprocess, os, sys, socket, urllib.request, time, concurrent.futures
root=Path(__file__).resolve().parent.parent
env=dict(os.environ,LP_NUM_THREADS='2')
servers=[]
def run(slug):
 d=root/slug
 p=subprocess.run(['node',str(d/'parent-verify.cjs')]+sys.argv[1:],env=env,capture_output=True,text=True,timeout=420)
 (d/'fidelity-evidence'/('parent-confirmation' if '--confirm' in sys.argv else 'parent-inspection')/'execution.txt').write_text(p.stdout+p.stderr)
 return slug,p.returncode,p.stdout,p.stderr
try:
 for n,slug in [(13,'13-arthur'),(14,'14-alex'),(15,'15-preymaker')]:
  with socket.socket() as s:s.bind(('127.0.0.1',9600+n))
  servers.append(subprocess.Popen(['python','-m','http.server',str(9600+n),'--bind','127.0.0.1','--directory',str(root/slug)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,env=env))
 for n in [13,14,15]:
  for attempt in range(30):
   try:
    with urllib.request.urlopen(f'http://127.0.0.1:{9600+n}/') as response:assert response.status==200
    break
   except OSError:time.sleep(.1)
 with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
  results=list(pool.map(run,['13-arthur','14-alex','15-preymaker']))
  for result in results:print(result,flush=True)
  if any(result[1] for result in results):raise SystemExit(1)
finally:
 for server in servers:server.terminate()
 for server in servers:server.wait(timeout=10)
