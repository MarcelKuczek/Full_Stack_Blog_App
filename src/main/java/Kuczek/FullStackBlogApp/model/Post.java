package Kuczek.FullStackBlogApp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Represents a Post.
 * This class is mapped to a database entity and includes attributes related to a post,
 * including its title, content, creation date.
 *
 * @author Marcel Kuczek
 */
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String author;
    private String title;
    private String content;
    private LocalDateTime created = java.time.LocalDateTime.now();
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "postId", updatable = false, insertable = false)
    private List<Comment> comment;
}
