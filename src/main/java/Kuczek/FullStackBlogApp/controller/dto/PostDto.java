package Kuczek.FullStackBlogApp.controller.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

/**
 * Data Transfer Object (DTO) representing a Post.
 *
 * @author Marcel Kuczek
 */
@Getter
@Builder
public class PostDto {
    private Long id;
    private String author;
    private String title;
    private String content;
    private LocalDateTime created;
}
