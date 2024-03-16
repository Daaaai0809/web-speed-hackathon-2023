#!/bin/bash

for ((i=1; i<=20; i++)); do
    convert -resize 52x52^ -gravity center -extent 52x52 $(printf "./%03d.webp" "$i") $(printf "./%03d.webp" "$i")
done;
