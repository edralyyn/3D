def print_topology(csv_files):
    if csv_files:
        print("\nTopology:\nPC        IP Address")
        for i, csv_file in enumerate(csv_files, start=1):
            print(f"{i:2}        {csv_file}")
    else:
        print("No CSV files found in the folder.")
