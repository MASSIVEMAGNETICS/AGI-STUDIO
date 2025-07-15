import subprocess

def run_command(command):
    process = subprocess.Popen(['python', 'run_studio.py'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    stdout, stderr = process.communicate(command)
    return stdout, stderr

def test_new_graph_and_add_node():
    print("Testing 'newgraph' and 'addnode' commands...")
    commands = "newgraph\naddnode linear\nexit\n"
    stdout, stderr = run_command(commands)
    if "New graph started" in stdout and "Added node" in stdout:
        print("Test passed!")
    else:
        print("Test failed!")
        print("STDOUT:", stdout)
        print("STDERR:", stderr)

if __name__ == "__main__":
    test_new_graph_and_add_node()
