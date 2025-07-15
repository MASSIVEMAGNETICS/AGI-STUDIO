#!/bin/bash

# Remove the virtual environment
rm -rf venv

# Remove the desktop shortcut
rm ~/Desktop/agi-studio.desktop

# Remove project files
rm agi_config.py
rm agi_fileops.py
rm agi_kernel.py
rm agi_session.py
rm agi_trainer.py
rm agi_utils.py
rm run_studio.py
rm test_runner.py
rm agi.log
rm agi_session.json
rm latest_graph.json
rm -rf checkpoints
rm -rf massive-magnetics_-agi-studio-suite

# Remove the installation and uninstallation scripts
rm install.sh
rm uninstall.sh

echo "Uninstallation complete."
