package Kuczek.FullStackBlogApp.controller;

import Kuczek.FullStackBlogApp.model.Comment;
import Kuczek.FullStackBlogApp.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing comments in Blog Application.
 * Provides endpoints to fetch comments .
 *
 *
 * @author marcelkuczek
 */
@RestController
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    /**
     * Retrieves a list of comments for the given post IDs.
     *
     * @param postIds List of IDs of the posts whose comments are to be retrieved.
     * @return A list of comments associated with post IDs.
     */
    @GetMapping("/comments")
    public List<Comment> getComments(@RequestParam List<Long> postIds){
        return commentService.getComments(postIds);
    }

    /**
     * Adds a new comment to the post.
     *
     * @param comment The comment to be added.
     * @return The newly created comment.
     */
    @PostMapping("/comments")
    public Comment addComment(@RequestBody Comment comment){
        return commentService.addComments(comment);
    }
}
