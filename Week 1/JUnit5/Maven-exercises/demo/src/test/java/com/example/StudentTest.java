package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class StudentTest {

    private Student student;

    @Before
    public void setUp() {
        student = new Student();
        System.out.println("Setup completed.");
    }

    @After
    public void tearDown() {
        student = null;
        System.out.println("Teardown completed.");
    }

    @Test
    public void testStudentName() {

        // Arrange
        String expected = "John";

        // Act
        String actual = student.getName();

        // Assert
        assertEquals(expected, actual);
    }
}