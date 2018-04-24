import React from 'react';

const Comments = React.createClass({
    renderComment(comment,i){
        console.log(comment);
        return (
            <div key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    },
    submitHandler(e){
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        if(author && comment){
            this.refs.commentForm.reset();
            this.props.addComment(postId,author,comment);
        }
    },
    render() {
        return (
            <div className="comment">
                Comments:
                {
                    this.props.postComments.map(this.renderComment)
                }
                <form ref="commentForm" onSubmit={this.submitHandler} className="comment-form">
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
});

export default Comments;