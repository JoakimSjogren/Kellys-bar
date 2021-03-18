# Kelly's bar

# Final version:
https://kellysbar.vercel.app/

## Code Review by Joey Jay
* index.html > row 10: 
I see you're using google fonts. A wise choice to ensure all visitors sees the same font no matter previously installed ones. However, for better
optimisation, I would recomend selfhosting it with the use of CSS. Tip for the future as it saves you from trouble if googles servers are down, and loading time.

* index.html > row 19:
seeing as Kellys Logo is mostly simple geometry mixed with typography, I would suggest switching to SVG to allow better quality of it and easier scaling without quality loss?


* index.html > row 93: 
Unser if there should be a space between the two or not.


* index.html:
you use a lot of divs, maybe look over if there are some better semantics elements you may use for your containers? Like "figure" instead of "div" for image containers.

* index.html > row 98 - 101:
I understand the need to keep the texts on new rows, but why not keep both in a single "p" element with a "br" to split them? Could save some code there.

* index.html > row 115: 
Nice didn't know there was a special telfone input :)

* index.html > row 129-131: 
At row 130, you have the text KELLY'S wrapped in a span element. Was wondering why you still needded to put it in an empty div (with no classes) inside of another empty div. Wouldn't it be easier to just work with span element itself?

* .gitignore:
Don't forget to include the "node_modules" here as they are also 3rd party code.

* styles/main.css row 121- 134:
Good idea to slide the images off screen and work on opacity for fades. MAy also recommend to chenge the display to none once they are outside of view?
Takes less computer power bandwidth as the files are still being requested. 

* styles/meda.css:
Nice solution to keep it more clean. :)

* scripts/slider.js > row 12:
I keep forgotting to work on translateX instead of margins and posiitions. Well done. xD

* scripts/main.js > row 8 - 35:
This looks like an impressive size of data you've been workingwith. Seeing as you already got them as objects, may I recomend moving them over to their own JSON file?
Makes the rest of the code look less crowded. ^.^'


* scripts/main.js > row 38-52:
Intresting loop you made to run the query search.
I used a normal foreach and got the data that way.
This looks a bit more complex. ^.^'

### Summary
Nicely coded in general. Might wanna look over a bit more semantics elemnts to use other than div. Nice way you solved the media queries without needing to rely on sass. Would love for you to run me through the loop I mentioned lastly, looks useful for when I need more advanced stuff :)