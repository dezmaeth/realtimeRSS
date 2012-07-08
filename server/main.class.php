<?php
class RSSReader {
    var $xml = null;
    var $pos = 0;
    var $count = 0;

    function __construct($feed_url) {
        $this -> load_url($feed_url);
    }

    function load_url($feed_url) {
        $this -> load_string(file_get_contents($feed_url));
    }

    function load_string($feed_string) {
        $this -> xml = simplexml_load_string(str_replace('content:encoded', 'content_encoded', $feed_string));
        $this -> pos = 0;
        $this -> count = count($this -> xml -> channel -> item);
    }

    function get_title() {
        return $this -> xml -> channel -> title;
    }

    function get_link() {
        return $this -> xml -> channel -> link;
    }

    function get_pubdate() {
        return $this -> xml -> channel -> pubdate;
    }

    function hasNext() {
        return $this -> count > $this -> pos;
    }

    function next() {
        $obj = $this -> xml -> channel -> item[$this -> pos++];
        $arr =  array(
            'title' => (string) $obj -> title,
            'link' => (string) $obj -> link,
            'description' => (string) $obj -> description,
            'content' => (string) $obj -> content_encoded,
            'pubDate' => strtotime($obj -> pubDate)
        );
        return json_encode($arr);
    }
}
?>