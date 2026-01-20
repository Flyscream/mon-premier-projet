import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mini-jeu',
  standalone: true,
  imports: [], 
  templateUrl: './mini-jeu.html',
  styleUrl: './mini-jeu.scss',
})
export class MiniJeu {
  board = signal(Array(9).fill(''));
  currentPlayer = signal(Math.random() < 0.5 ? 'X' : 'O');  
  winner = signal<string | null>(null);

  makeMove(index: number) {
    if (this.board()[index] !== '' || this.winner()) return;

    const newBoard = [...this.board()];
    newBoard[index] = this.currentPlayer();
    
    this.board.set(newBoard);

    if (this.checkWinner()) {
      this.winner.set(this.currentPlayer());
    } else {
      this.currentPlayer.set(this.currentPlayer() === 'X' ? 'O' : 'X');
    }
  }

  checkWinner(): boolean {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];
    return lines.some(([a, b, c]) => 
      this.board()[a] !== '' && 
      this.board()[a] === this.board()[b] && 
      this.board()[a] === this.board()[c]
    );
  }

  resetGame() {
    this.board.set(Array(9).fill(''));
    this.currentPlayer.set('X');
    this.winner.set(null);
  }
}