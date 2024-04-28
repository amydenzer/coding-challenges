#!/bin/bash

# Function to increment days
date_increment() {
  date -j -v+1d -f "%Y-%m-%d" "$1" "+%Y-%m-%d"
}

# Starting and ending dates
start_date="2024-04-02"
end_date="2024-04-28"

current_date="$start_date"

while [ "$current_date" != "$(date_increment "$end_date")" ]; do
  # Create or update the file
  echo "Code challenge completed on $current_date" >> code_challenges
  
  # Add changes to the staging area
  git add code_challenges
  
  # Commit with a specific date
  GIT_COMMITTER_DATE="$current_date 12:00:00" git commit --date="$current_date 12:00:00" -m "Code challenge for $current_date"
  
  # Increment the date
  current_date=$(date_increment "$current_date")
done
