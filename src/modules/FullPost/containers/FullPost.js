import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FullPost } from '../../../components';
import PostListActions from '../../PostList/actions';



class FullPostContainer extends Component {

    componentDidMount() {
        const { post, postId, fetchItem } = this.props;
        if (!post) {
            fetchItem(postId)
        }

    }

    render() {
        const {post} = this.props
        return !post ? 'Loading' : <FullPost text={post && post.text} createdAt={post && post.createdAt}/>

    }
}

const mapStateToProps = ({ posts }, { match }) => ({
    post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
    postId: match.params.id,
});


export default withRouter(
    connect(
        mapStateToProps,
        PostListActions,
    )(FullPostContainer)
)