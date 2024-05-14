import pandas as pd
import os

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Specify the path to the folder containing the CSV files
csv_folder_path = os.path.join(current_dir, "Eventlogs", "SYSLOG")

def translate_csv_files():
    # Loop through each CSV file in the folder
    for filename in os.listdir(csv_folder_path):
        if filename.endswith(".csv"):
            csv_file_path = os.path.join(csv_folder_path, filename)
            
            # Read the CSV file into a DataFrame
            df = pd.read_csv(csv_file_path)
            
            # Rename the "Id" column to "Event ID" if it exists
            if 'Id' in df.columns:
                df.rename(columns={"Id": "Event ID"}, inplace=True)
            elif 'id' in df.columns:
                df.rename(columns={"id": "Event ID"}, inplace=True)
            
            # Overwrite the existing CSV file with the modified DataFrame
            df.to_csv(csv_file_path, index=False)
            
            print(f"CSV file '{filename}' has been successfully modified and overwritten.")

if __name__ == "__main__":
    translate_csv_files()
