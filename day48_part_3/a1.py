def hash_map_example():

    user_settings = {
        "theme":"dark",
        "notifications":"enabled"
    }

    print(f"Theme: {user_settings.get("theme")}")


    if "theme" in user_settings:
        print("Theme is present")

    
    for key,value in user_settings.items():
        print(f"{key}: {value}")
        
    user_settings.pop("theme",None)
    print(f"After removing theme: {user_settings}")

if __name__ == "__main__":
    hash_map_example()