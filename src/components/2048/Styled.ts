import styled from 'styled-components';

export const GameProvider = styled.div`
width: 500px;
margin: auto;

.game-container {
  touch-action: none;
  background: #bbada0;
  border-radius: 6px;
}

.title {
  font-size: 80px;
  font-weight: bold;
  margin: 0;
  display: block;
  float: left;
}

.score-container, .best-container {
  position: relative;
  display: inline-block;
  background: #bbada0;
  padding: 15px 5px;
  font-size: 25px;
  line-height: 47px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  margin-top: 8px;
  text-align: center;
  height: 60px;
  width: 60px;
  margin: 0px 5px;
}

.scores-container {
  text-align: right;
  height: max-content;
}

.score-container:after {
  content: "Score";
}

.best-container:after {
  content: "Best";
}
.game-intro {
  float: left;
  line-height: 42px;
  margin-bottom: 0;
}

.restart-button {
  display: inline-block;
  background: #8f7a66;
  border-radius: 3px;
  padding: 0 20px;
  text-decoration: none;
  color: #f9f6f2;
  height: 40px;
  line-height: 42px;
  display: block;
  text-align: center;
  float: right;
}

.restart-button:focus {
  outline: none;
  border: none;
}

.score-container:after, .best-container:after {
  position: absolute;
  width: 100%;
  top: 10px;
  left: 0;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #eee4da;
}

.game-board {
  background-color: olive;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 4px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  padding: 4px;
  height: 100px;
}

.cell {
  padding: 10px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(238, 228, 218, 0.35);
  border-radius: 5px;
}

.cell-2 {
  background-color: #eee4da;
}

.cell-4 {
  background-color: #eee1c9;
}

.cell-8 {
  background-color: #f3b27a;
  color: #f9f6f2;
}

.cell-16 {
  color: #f9f6f2;
  background: #f69664;
}

.cell-32 {
  color: #f9f6f2;
  background: #f77c5f;
}

.cell-64 {
  color: #f9f6f2;
  background: #f75f3b;
}

.cell-128 {
  color: #f9f6f2;
  background: #edd073;
  box-shadow: 0 0 30px 10px rgb(243 215 116 / 24%), inset 0 0 0 1px rgb(255 255 255 / 14%);
  font-size: 45px;
}

.cell-256 {
  color: #f9f6f2;
  background: #edcc62;
  box-shadow: 0 0 30px 10px rgb(243 215 116 / 32%), inset 0 0 0 1px rgb(255 255 255 / 19%);
  font-size: 45px;
}

.cell-512 {
  color: #f9f6f2;
  background: #edc950;
  box-shadow: 0 0 30px 10px rgb(243 215 116 / 40%), inset 0 0 0 1px rgb(255 255 255 / 24%);
  font-size: 45px;
}

.cell-1024 {
  color: #f9f6f2;
  background: #edc53f;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.285714);
  font-size: 35px;
}

.cell-2048 {
  color: #f9f6f2;
  background: #edc22e;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.555556), inset 0 0 0 1px rgba(255, 255, 255, 0.333333);
  font-size: 35px;
}
`