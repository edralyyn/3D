def print_success():
    print("Collect successfully.")

def print_device_count(num_csv_files):
    if num_csv_files > 0:
        print(f"\nDevices found: {num_csv_files}")
    else:
        print("No devices found")