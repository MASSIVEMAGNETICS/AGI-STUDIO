# AGI Studio Suite GODCORE Edition

This is a standalone AGI studio backend.

## Installation

To install the AGI Studio Suite, run the `install.sh` script:

```bash
./install.sh
```

This will create a virtual environment, install the required dependencies, and create a desktop shortcut.

## Uninstallation

To uninstall the AGI Studio Suite, run the `uninstall.sh` script:

```bash
./uninstall.sh
```

This will remove the virtual environment, the desktop shortcut, and all the project files.

## Usage

After installation, you can run the AGI Studio Suite by double-clicking the "AGI Studio" shortcut on your desktop. This will open a terminal window with the AGI Studio CLI.

You can also run the application from the command line:

```bash
./run_studio.py
```

The CLI supports the following commands:

*   `newgraph`: Start a new graph
*   `loadgraph [path]`: Load graph from file
*   `savegraph [path]`: Save current graph
*   `addnode [type]`: Add node to graph
*   `connect [src] [dst]`: Connect nodes
*   `train [epochs]`: Train for N epochs (dummy data)
*   `checkpoint`: Save checkpoint
*   `stats`: Show training stats
*   `quit` or `exit`: Save session & exit