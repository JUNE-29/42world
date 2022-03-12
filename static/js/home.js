const commentSubmitBtton = document.querySelector('#comment_submit_button');

commentSubmitBtton.addEventListener("click", () =>{
    const comment =  document.querySelector('#comment');
    const commentList = document.querySelector('#comments__list');
    const userComment =  comment.value;
    const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`;

    const commentItemTemplate = (userComment, currentDate) => {
        return `<li>
        <p class="followers_comments">${userComment}</p>
        <p class="comments_date">${currentDate}</p>
        <button class="comment_del_btn"><i class="fa-solid fa-xmark"></i></button>
        </li>`
    };

    commentList.insertAdjacentHTML('afterbegin', commentItemTemplate(userComment, currentDate));
});