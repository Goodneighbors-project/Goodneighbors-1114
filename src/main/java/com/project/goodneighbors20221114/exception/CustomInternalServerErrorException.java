package com.project.goodneighbors20221114.exception;

public class CustomInternalServerErrorException extends RuntimeException{

    public CustomInternalServerErrorException(String message) {
        super(message);
    }
}
