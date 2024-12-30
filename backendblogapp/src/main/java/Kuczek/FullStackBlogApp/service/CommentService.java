package Kuczek.FullStackBlogApp.service;

import Kuczek.FullStackBlogApp.model.Comment;
import Kuczek.FullStackBlogApp.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class for managing comments in the Blog Application.
 * Provides business logic for retrieving and adding comments.
 *
 *
 * @author marcelkuczek
 */
@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    /**
     * Retrieves a list of comments for the given post IDs.
     *
     * @param postIds List of IDs of the posts whose comments are to be retrieved.
     * @return A list of comments associated with post IDs.
     */
    public List<Comment> getComments(List<Long> postIds){
        return  commentRepository.findAllByPostIdIn(postIds);
    }

    /**
     * Adds a new comment to the database.
     *
     * @param comment The comment to be added, which includes the post ID and content.
     * @return The newly saved comment.
     */
    public Comment addComments(Comment comment){
        return  commentRepository.save(comment);
    }
}
