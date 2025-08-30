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

## Victor Thought Engine v2

The `VictorThoughtEngine` has been upgraded to version 2.0.0, which includes the following new features:

*   **Pulse Telemetry Bus:** A central hub for broadcasting internal events and states, providing real-time observability of the engine's operation.
*   **Multi-Modal Input Processor:** The ability to handle different types of input, including text, audio, and images.
*   **LLM Thought Generator:** A simulated LLM-powered thought generation system that includes confidence scores and explanations for explainable AI (XAI).
*   **RL Directive Optimizer:** A simulated reinforcement learning model to optimize directives, allowing the engine to learn from experience and make more intelligent decisions.
*   **Skill Agents:** A modular system of specialized AI "skill" agents that perform specific tasks.
*   **Asynchronous Design:** The engine is now fully asynchronous, making it highly performant and scalable.

### `pushevent` command

The `pushevent` command has been updated to support the new features of the `VictorThoughtEngine`. The new syntax is:

```
pushevent [type] [payload] [user_id] [project_id]
```

*   `type`: The type of event (e.g., "input.chat", "sensor.temp").
*   `payload`: The raw data of the event.
*   `user_id`: The identifier for the user.
*   `project_id`: The identifier for the project.

### Further Improvements

*   **Real Machine Learning Models:** The current implementation uses simulated machine learning models. These could be replaced with real models to provide more accurate and intelligent responses.
*   **More Skill Agents:** The engine could be extended with more skill agents to handle a wider range of tasks.
*   **GUI for Pulse Telemetry:** A graphical user interface could be created to visualize the pulse telemetry data in real-time.