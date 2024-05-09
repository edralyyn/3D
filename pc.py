#pc.py

import os
import sys

# Add the directory containing collect.py to the Python path
collect_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "Eventlogs"))
sys.path.append(collect_dir)

# Now import the collect module
import collect

def list_csv_files(csv_folder_path):
    try:
        # Check if the CSV folder exists
        if not os.path.exists(csv_folder_path):
            print(f"CSV folder '{csv_folder_path}' does not exist.")
            return []
        
        # Get a list of CSV files in the folder
        csv_files = [f[:-4] for f in os.listdir(csv_folder_path) if f.endswith('.csv')]
        
        # If there are no CSV files, return an empty list
        if not csv_files:
            print("No CSV files found in the folder.")
        
        return csv_files
    except Exception as e:
        print(f"Error: {e}")
        print("Failed to retrieve CSV files.")
        return []

def count_csv_files(csv_folder_path):
    try:
        # Get the list of CSV files
        csv_files = list_csv_files(csv_folder_path)
        
        # Print the message only if there are CSV files found
        if csv_files:
            print("Collect successfully.")
            print("Topology:")
            print("PC        IP Address")
            for i, csv_file in enumerate(csv_files, start=1):
                print(f"{i:2}        {csv_file}")
            
            num_csv_files = len(csv_files)
            print(f"Devices found: {num_csv_files}")
            return num_csv_files
        else:
            print("No CSV files found in the folder.")
            return 0
    except Exception as e:
        print(f"Error: {e}")
        print("Failed to count CSV files.")
        return 0

if __name__ == "__main__":
    try:
        # Call the function from collect.py to collect logs with IP
        collect.run_powershell_script("ps-collect-logwithip-local.ps1")
        
        # Get the current working directory
        current_directory = os.getcwd()
        
        # Construct the folder path to Eventlogs\SYSLOG
        csv_folder_path = os.path.join(current_directory, "Eventlogs", "SYSLOG")
        
        # Call the function to list and count the CSV files
        count_csv_files(csv_folder_path)
    except Exception as e:
        print(f"Error: {e}")
        print("Failed to run the script.")
