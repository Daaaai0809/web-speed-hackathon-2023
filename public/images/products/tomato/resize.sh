#!/bin/bash

for ((i=1; i<=10; i++)); do
    convert -resize 1024x576^ -gravity center -extent 1024x576 $(printf "./%03d.webp" "$i") $(printf "./%03d.webp" "$i")
done;
