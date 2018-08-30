import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="to-do-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // prevent from onToggle execution
            onRemove(id);
          }}
        >
          &times; &nbsp;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <span className="check-mark">&#x2713;</span>}
      </div>
    );
  }
}

export default TodoItem;

/*

    text: todo 내용
    checked: 체크박스 상태
    id: todo 의 고유 아이디
    onToggle: 체크박스를 키고 끄는 함수
    onRemove: 아이템을 삭제시키는 함수

    e.stopPropagation() 은 이벤트의 “확산” 을 멈춰준다. 
    즉, 삭제부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해줌.
 */
