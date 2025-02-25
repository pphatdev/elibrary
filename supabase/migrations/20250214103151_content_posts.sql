
CREATE TABLE content_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content JSONB[] NOT NULL DEFAULT '{}',
    meta_data JSONB DEFAULT '{}',
    slug VARCHAR(255) UNIQUE,
    status BOOLEAN DEFAULT TRUE,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES auth.users(id),
    author_id INTEGER REFERENCES authors(id)
);

CREATE INDEX idx_content_posts_slug ON content_posts(slug);
CREATE INDEX idx_content_posts_content ON content_posts USING GIN(content);

ALTER TABLE content_posts ENABLE ROW LEVEL SECURITY;