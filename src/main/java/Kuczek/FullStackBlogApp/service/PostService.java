package Kuczek.FullStackBlogApp.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import Kuczek.FullStackBlogApp.model.Comment;
import Kuczek.FullStackBlogApp.model.Post;
import Kuczek.FullStackBlogApp.repository.CommentRepository;
import Kuczek.FullStackBlogApp.repository.PostRepository;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service class for managing posts and comments.
 * This class contains business logic for handling operations related to posts.
 *
 * @author Marcel Kuczek
 */
@RequiredArgsConstructor
@Service
public class PostService {

    private static final int pageSize = 10;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    /**
     * Retrieves a paginated list of posts.
     *
     * @param pageNumber the page number to retrieve (0-based index)
     * @return a list of Post objects representing the posts
     */
    public List<Post> getPosts(int pageNumber) {
        return postRepository.findAllPosts(PageRequest.of(pageNumber, pageSize));
    }

    /**
     * Retrieves a single post by its ID.
     *
     * @param id the ID of the post to retrieve
     * @return the Post object representing the requested post
     * @throws EntityNotFoundException if the post with the given ID does not exist
     */
    public Post getSinglePost(long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Post not found with ID: " + id));
    }

    /**
     * Retrieves a paginated list of posts along with their comments.
     *
     * @param pageNumber the page number to retrieve (0-based index)
     * @return a list of Post objects representing the posts with their comments
     */
    public List<Post> getPostsWithComments(int pageNumber) {
        List<Post> allPosts = postRepository.findAllPosts(PageRequest.of(pageNumber, pageSize));
        List<Long> ids = allPosts.stream()
                .map(Post::getId)
                .collect(Collectors.toList());
        List<Comment> comments = commentRepository.findAllByPostIdIn(ids);
        allPosts.forEach(post -> post.setComment(extractComments(comments, post.getId())));
        return allPosts;
    }

    /**
     * Extracts comments associated with a specific post ID.
     *
     * @param comments the list of all comments
     * @param id       the ID of the post whose comments are to be extracted
     * @return a list of Comment objects associated with the given post ID
     */
    private List<Comment> extractComments(List<Comment> comments, long id) {
        return comments.stream()
                .filter(comment -> comment.getPostId() == id)
                .collect(Collectors.toList());
    }

    /**
     * Adds a new post.
     *
     * @param post the Post object to be added
     * @return the added Post object
     */
    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    /**
     * Edits an existing post.
     *
     * @param post the Post object containing updated information
     * @return the updated Post object
     * @throws EntityNotFoundException if the post with the given ID does not exist
     */
    @Transactional
    public Post editPost(Post post) {
        Post postEdited = postRepository.findById(post.getId()).orElseThrow();
        if (post.getAuthor() != null) {
            postEdited.setAuthor(post.getAuthor());
        }
        if (post.getTitle() != null) {
            postEdited.setTitle(post.getTitle());
        }
        if (post.getContent() != null) {
            postEdited.setContent(post.getContent());
        }
        if (post.getCreated() != null) {
            postEdited.setCreated(post.getCreated());
        }
        return postEdited;
    }

    /**
     * Deletes a post by its ID.
     *
     * @param id the ID of the post to be deleted
     * @throws EntityNotFoundException if the post with the given ID does not exist
     */
    public void deletePost(Long id) {
        if (!postRepository.existsById(id)) {
            throw new EntityNotFoundException("Post not found with ID: " + id);
        }
        postRepository.deleteById(id);
    }
}