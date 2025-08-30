import asyncio
import subprocess

async def run_command(command):
    process = await asyncio.create_subprocess_exec(
        'python', 'run_studio.py',
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    stdout, stderr = await process.communicate(command.encode())
    return stdout.decode(), stderr.decode()

async def test_new_graph_and_add_node():
    print("Testing 'newgraph' and 'addnode' commands...")
    commands = "newgraph\naddnode linear\nexit\n"
    stdout, stderr = await run_command(commands)
    if "New graph started" in stdout and "Added node" in stdout:
        print("Test passed!")
    else:
        print("Test failed!")
        print("STDOUT:", stdout)
        print("STDERR:", stderr)

async def test_pushevent():
    print("Testing 'pushevent' command...")
    commands = "pushevent system.log ERROR: Disk almost full! admin_sys system_ops\nexit\n"
    stdout, stderr = await run_command(commands)
    if "Sending critical notification" in stdout:
        print("Test passed!")
    else:
        print("Test failed!")
        print("STDOUT:", stdout)
        print("STDERR:", stderr)

async def main():
    await test_new_graph_and_add_node()
    await test_pushevent()

if __name__ == "__main__":
    asyncio.run(main())
