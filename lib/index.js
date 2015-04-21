import * as $ from '../bower_components/jquery/dist/jquery.js'
import {Rectangle, Circle} from 'DrawObject.js'

// reference canvas element (with id="c")
var canvasEl = document.getElementById('drawCanvas');

// get 2d context to draw on (the "bitmap" mentioned earlier)
var ctx = canvasEl.getContext('2d');

var canvas =  new fabric.Canvas('drawCanvas');

//canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

// set fill color of context
ctx.fillStyle = 'red';

var rect = new Rectangle(canvas, 100, 100, 10, 10, '#f55', 1);
rect.draw();

$(function () {
    $('#tabs').w2tabs({
        name: 'tabs',
        active: 'tab1',
        tabs: [
            { id: 'tab1', caption: 'Tab 1' },
            { id: 'tab2', caption: 'Tab 2' },
            { id: 'tab3', caption: 'Tab 3' },
            { id: 'tab4', caption: 'Tab 4' }
        ],
        onClick: function (event) {
            $('#selected-tab').html(event.target);
        }
    });
});

$(function () {
    $('#toolbar').w2toolbar({
        name: 'toolbar',
        items: [
            { type: 'menu',   id: 'item2', caption: 'Shapes', icon: 'fa-table', count: 2, items: [
                { text: 'Rectangle', icon: 'fa-square' },
                { text: 'Circle', icon: 'fa-circle'}
            ]},
            { type: 'break', id: 'break1' },
            { type: 'radio',  id: 'item3',  group: '1', caption: 'Draw Mode', icon: 'fa-star' },
            { type: 'radio',  id: 'item4',  group: '1', caption: 'Shape Mode', icon: 'fa-heart', checked: true },
            { type: 'break', id: 'break2' }
        ]
    });

    w2ui.toolbar.on('*', function (event) {
        if (event.target === "item2:Rectangle") {
            var rect = new Rectangle(canvas, 100, 100, 10, 10, '#f55', 1);
            rect.draw();
        }

        if (event.target === "item2:Circle")  {
            var circle = new Circle(canvas, 30, 10, 10, '#f55', 1);
            circle.draw();
        }

        if (event.target === 'item3') {
            canvas.isDrawingMode = false;
        }

        if (event.target === 'item4') {
            canvas.isDrawingMode = true;
        }
    });
});