# hexagon-of-hexagons
Generate a SVG of a hexagon comprised of smaller hexagons. See it in action [here](http://townsean.github.io/hexagon-of-hexagons/)! (work in progress)

## Synopsis
Hexagon of Hexagons is a vanilla JS web app that generates a SVG of a hexagon comprised of smaller hexagons given an input x, where x equals the length of a side in hexagons. 

## Motivation
I wanted to create a custom tray for the greatest board game of all time: Twilight Imperium. The game uses hexagon planet tiles. The game board is the collection of these planet tiles. Together the tiles form a larger hexagon. My plan is to use my CNC machine to carve out hexagons such that the planet tiles can fit into the carved out sections making the game board portable. 

I thought it would be great to programmatically generate the SVG file necessary for carving the custom tray for Twilight Imperium. This wheel probably has already been invented before (I haven't looked), but regardless I thought it would be a fun project to implement.

Additionally, I have been craving writing a web app in vanilla JS and CSS. This project provides me the opportunity to do so. I have been spoiled by frontend frameworks and feel working on this project will be a great opportunity to further expand my knowledge base.

### An update
It just occurred to me that the application I'm am implementing is really just a honeycomb generator. That probably would have been a more appropriate name for the project, albeit a common name too.

## A Brief Geometry Lesson

Figuring out the algorithm to programmatically draw a regular hexagon (all angles and sides are equal) required a geometry lesson. Here are a few links I found useful in my research:

* [Schläfli symbol](https://en.wikipedia.org/wiki/Schläfli_symbol)
* [SVG regular polygons](https://codepen.io/thebabydino/pen/WbjdRq)
* [Draw a Hexagonal Shape in C#](http://csharphelper.com/blog/2015/10/draw-a-hexagonal-grid-in-c/)
* [Stack Overflow question about Drawing Hexagons](https://stackoverflow.com/questions/37236439/creating-a-single-hexagon-in-c-sharp-using-drawpolygon/37236667)

## Built With

* [Modak Google Font](https://fonts.google.com/specimen/Modak)
* [Lato Google Font](https://fonts.google.com/specimen/Lato)

## Maintainers

* [Ashley Grenon - @townsean](https://github.com/townsean)

## License (MIT)

The MIT License (MIT) Copyright (c) 2019 Ashley Grenon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
