# Partial Project name
$PartialProjectName = "vsc-microsoftvscode"

# List of Containers
$ContainerList = docker container ls -a

# Container List Item
$ContainerListItem = $ContainerList -match $PartialProjectName # Find a partial match within an array

# String Array from "Container List Item"
#$ContainerListItemArray = $ContainerListItem.Split("`t") # Splits on a single character
$ContainerListItemArray = $ContainerListItem -Split("   ") # Uses Regex to split on multiple characters

# Container ID and Name
#$ContainerName = $ContainerListItemArray[1]
$ContainerID = $ContainerListItemArray[0]

# Start Remote Container
docker container start $ContainerID
