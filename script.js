$(function () {
  createBoard();
});

var $selectedPiece = null;

function createBoard(){
  var $board = $('<div/>', {id: 'board'});
  for( var row = 0; row < 8; row++ ) {
    for( var col = 0; col < 8; col++ ) {
      $tile = $('<div/>', {class: 'tile', 'data-x': col, 'data-y': 7-row});
      if( (col + row) % 2 ) {
        $tile.addClass('dark');
        
        var $piece = null;
        if( row < 3 ) {
          $piece = $('<div/>', {class: 'red piece'});   
        } else if( row > 4 ) {
        var $piece = $('<div/>', {class: 'black piece'});
          $piece.click(clickOnPiece);
        }
        $tile.append($piece);
        
      } else {
        $tile.addClass('light');
      }
      $board.append($tile);
    }
  }
  $(document.body).append($board);
}

function clickOnPiece() {
  changeSelection($(this));
  showMoveOptions($(this));
}

function changeSelection($piece) {
  if( $selectedPiece == $piece ) {
    $selectedPiece = null;
	$selectedPiece.removeClass('selected');
  } else {
    if( $selectedPiece != null ) {
      $selectedPiece.removeClass('selected');
    }
	$selectedPiece = $piece;
	$selectedPiece.addClass('selected');
  }
}

function showMoveOptions($piece) {
  var x = $piece.parent().data('x');
  var y = $piece.parent().data('y');
            
  $('[data-x="'+ x+1 +'"][data-y="'+ y+1 +'"]').addClass('show');
}
