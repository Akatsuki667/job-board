# :root

Global settings are set here. Make it quicker to apply a change. It is also easier to keep styling coherent.

# --

-- can be found before a variable. For example:
--primary: #2563eb;

It is mandatory to make the line a variable.

# transition

--transition: 0.25s ease;
Transitions enable us to define the transition between two states of an element.

# rem

rem = Root em
In our case, we did not modified the size of 1 rem. It is 16px.
So, 1 rem = 16px
2 rem = 32px

# Removing HTML paddings and margins

This comment concerns this extract:

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Segoe UI', sans-serif;
}

Setting a padding and a margin to 0 might seem to be useless. But it is mandatory to override default browsers settings. They can set a margin / padding to HTML elements.

# :focus

The :focus CSS pseudo-class represents an element (such as a form input) that has received focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's Tab key.

In our case, input fields from the form change when a user clicks on them.

# outline: none;

Serves the same purpose as padding: 0 and margin: 0; used to override default browser settings

# text-decoration: none;

Serves the same purpose as padding: 0 and margin: 0, and outline: none;