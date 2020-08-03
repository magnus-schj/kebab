# kebab
Some of my friends got funding to test Kebab-places in Oslo and review them, thought I could make a page about it for fun

## Docker

Building the container:

    docker build -t kebab .

Running the container:

    docker run --name kebab -d -p 8094:80 kebab
