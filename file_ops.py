import os

def list_csv_files(csv_folder_path):
    """ Lists CSV files in the given folder path, excluding the file extension. """
    if not os.path.exists(csv_folder_path):
        print(f"CSV folder '{csv_folder_path}' does not exist.")
        return []
    
    csv_files = [f[:-4] for f in os.listdir(csv_folder_path) if f.endswith('.csv')]
    if not csv_files:
        print("No CSV files found in the folder.")
    
    return csv_files

def count_csv_files(csv_folder_path):
    """ Counts CSV files in the given folder path and returns the list of files and their count. """
    csv_files = list_csv_files(csv_folder_path)
    num_csv_files = len(csv_files)
    return csv_files, num_csv_files
