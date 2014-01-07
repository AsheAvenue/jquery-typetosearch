# TypeToSearch

TypeToSearch is a jQuery plugin that displays a magical search form when page users begin typing. Users can enter and submit a search query without having to use the mouse. The search form can also be displayed programmatically.  

## Usage

Create a search overlay:

    <div class="search-overlay">
        <div class="search-title">Search</div>
        <div class="search-instructions">Press Enter To Search</div>
        <div class="close-search">Close</div>
        <div class="search-form">
            <form method="get"><input type="text" name="search" class="overlay-search-term" /></form>
        </div>
    </div>
    
Enable TypeToSearch once your document is ready:

    $(document).ready(function(){
        $('.search-overlay').typeToSearch({
            searchUrl : '/search/<%term%>' 
        });
    });

The form can be styled any way you'd like. An example:

    .search-overlay {
        background-color: #E76252;
        display: none;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 100000;
        color: #fff;
    }

    .search-overlay .search-title {
        margin: 20px 0 10px 5%;
        font-family: 'Londrina Shadow', Helvetica;
        font-size: 72px;
    }

    .search-overlay .close-search {
        right: 5%;
        top: 20px;
        position: absolute;
        cursor: pointer;
    }

    .search-overlay .search-instructions {
        font-size: 12px;
        margin: 0 0 40px 5%;
    }

    .search-overlay .search-form {
        margin-top: 60px;
        width: 90%;
        margin: 0 5%;
    }

    .search-overlay .search-form .overlay-search-term {
        padding: 10px 0;
        font-size: 68px;
        background: 0;
        color: white;
        border: 0;
        border-bottom: 1px solid #fff;
        width: 100%;
        outline-style: none;
        outline-width: 0px;
    }

## License and Credits

© 2014 <a href="http://www.asheavenue.com">Ashe Avenue</a>. Created by Ben Walker.
<br />
TypeToSearch is released under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.
