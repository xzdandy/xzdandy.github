---
layout: post
title: Install OpenGL In Visual Studio 2013
---

{{ page.title }}
================

<p class="meta">28 Sept 2014 - Shanghai</p>

##Download:
* [glut]( http://www.opengl.org/resources/libraries/glut/glut_downloads.php)
* [for windows code](http://user.xmission.com/~nate/glut.html)

We use **glut-3.7.6-bin.zip** to configure the environment.

##Configure:
* Copy your glut.h to <drive\>\:\<VC++ path>\include\GL\glut.h
* Copy your　glut32.lib to <drive\>\:\<VC++path>\lib\glut32.lib
* Copy glut32.dll into your windows directory. For example glut32.dll ---> C:\Windows\SysWOW64
* Create a project in VS 2013, and choose project->project property-> ConfigurationProperties->Linker->Input->Additional Dependencies,then add **opengl32.lib glu32.lib glut32.lib**

<p> </p>

## Test Code:
<pre class="prettyprint linenums">
#include &ltGl\glut.h&gt

void myDisplay(void)
{
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0);
    glBegin(GL_LINES);
    glVertex2i(180, 15);
    glVertex2i(10, 145);
    glEnd();
    glRectf(-0.5f, -0.5f, 0.5f, 0.5f);
    glFlush();
}

void init(void)
{
    glClearColor(1.0, 1.0, 1.0, 0.0);
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0.0, 200.0, 0.0, 150.0);
}

int main(int argc, char * argv[])
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);
    glutInitWindowPosition(50, 100);
    glutInitWindowSize(400, 300);
    glutCreateWindow("OpenGL");
    init();
    glutDisplayFunc(&myDisplay);
    glutMainLoop();
    return 0;
}
</pre>

<p> </p>

##Reference:
* [Windows 8.1 Visual Studio 2013配置OpenGL开发环境](http://blog.csdn.net/lvhao578041381/article/details/18971691)