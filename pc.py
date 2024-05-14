import os
import sys
from file_ops import count_csv_files
import subprocess

# Adjusting path to include the directory where collect.py and Eventlogs are located
collect_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "Eventlogs"))
sys.path.append(collect_dir)

import collect
import p1
import p2

def main():
    try:
        # Execute the PowerShell script to collect logs
        collect.run_powershell_script("ps-collect-logwithip-local.ps1")
        
        # Execute the translate.py script to translate CSV files
        translate_script_path = os.path.join(os.path.dirname(__file__), "translate.py")
        subprocess.run(["python", translate_script_path])
        
        # Define the path to the CSV files
        current_directory = os.getcwd()
        csv_folder_path = os.path.join(current_directory, "Eventlogs", "SYSLOG")
        
        # Get CSV files and their count
        csv_files, num_csv_files = count_csv_files(csv_folder_path)
        
        # Print the outputs using the respective modules
        p1.print_success()
        p2.print_topology(csv_files)
        p1.print_device_count(num_csv_files)

    except Exception as e:
        print(f"Error: {e}")
        print("Failed to run the script.")

if __name__ == "__main__":
    main()
