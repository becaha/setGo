var sketchProc = function (processingInstance) {
    with (processingInstance) {
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        var noSets = [];

        var scene = 1;

        var Card = function (num, shape, color, pattern) {
            this.x = 200;
            this.y = 100;
            this.l = 100;
            this.h = 70;
            this.num = num;
            this.shape = shape;
            this.color = color;
            this.pattern = pattern;
        };

        var cardDisplay = 1;

        Card.prototype.draw = function () {
            if (cardDisplay === 1) {
                this.y = 50;
            } else if (cardDisplay === 2) {
                this.y = 150;
            } else if (cardDisplay === 3) {
                this.y = 250;
            } else if (cardDisplay === 4) {
                this.x = 80;
            } else if (cardDisplay === 5) {
                this.x = 200;
            } else if (cardDisplay === 6) {
                this.x = 320;
            } else if (cardDisplay === 7) {
                this.x = 80;
                this.y = 300;
            } else if (cardDisplay === 8) {
                this.x = 200;
                this.y = 300;
            } else if (cardDisplay === 9) {
                this.x = 320;
                this.y = 300;
            }
            fill(255, 255, 255);
            //noFill();
            stroke(0, 0, 0);
            rect(this.x, this.y, this.l, this.h);
            var ellipseLength = (this.l + this.h) / 9;
            var ellipseWidth = (this.l + this.h) / 9;
            var rectLength = (this.l + this.h) / 9;
            var rectWidth = (this.l + this.h) / 9;
            var tx1 = this.x - (this.l + this.h) / 15;
            var ty1 = this.y - (this.l + this.h) / 25;
            var tx2 = this.x + (this.l + this.h) / 15;
            var ty2 = this.y - (this.l + this.h) / 25;
            var tx3 = this.x;
            var ty3 = this.y + (this.l + this.h) / 15;
            strokeWeight(3);
            //num1
            if (this.num === 1) {
                //num1 and color1 RED
                if (this.color === 1) {
                    stroke(255, 0, 0);
                    fill(255, 0, 0);
                    //num1 and color1 RED and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num1 and color1 RED and pattern1 BLANK and shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color1 RED and pattern1 BLANK and shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color1 RED and pattern1 BLANK and shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num1 and color1 RED and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num1 and color1 RED and pattern2 FILL and shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color1 RED and pattern2 FILL and shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color1 RED and pattern2 FILL and shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num1 and color1 RED and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x, this.y, ellipseLength / 5, ellipseLength / 5);
                        noFill();
                        /*num1 and color1 RED and pattern3 DOT and shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color1 RED and pattern3 DOT and shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color1 RED and pattern3 DOT and shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                }
                //num1 and color2 GREEN
                else if (this.color === 2) {
                    stroke(10, 194, 59);
                    fill(10, 194, 59);
                    //num1 and color2 GREEN and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num1 and color2 GREEN and pattern1 BLANK and                  shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color2 GREEN and pattern1 BLANK and                  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color2 GREEN and pattern1 BLANK and                  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num1 and color2 GREEN and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num1 and color2 GREEN and pattern2 FILL and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color2 GREEN and pattern2 FILL and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color2 GREEN and pattern2 FILL and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num1 and color2 GREEN and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x, this.y, ellipseLength / 5,
                            ellipseLength / 5);
                        noFill();
                        /*num1 and color2 GREEN and pattern3 DOT and                   shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color2 GREEN and pattern3 DOT and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color2 GREEN and pattern3 DOT and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }

                }
                //num1 and color3 PURPLE
                else if (this.color === 3) {
                    stroke(185, 11, 194);
                    fill(185, 11, 194);
                    //num1 and color3 PURPLE and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num1 and color3 PURPLE and pattern1 BLANK and                  shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color3 PURPLE and pattern1 BLANK and                  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color3 PURPLE and pattern1 BLANK and                  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num1 and color3 PURPLE and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num1 and color3 PURPLE and pattern2 FILL and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color3 PURPLE and pattern2 FILL and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color3 PURPLE and pattern2 FILL and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num1 and color3 PURPLE and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x, this.y, ellipseLength / 5,
                            ellipseLength / 5);
                        noFill();
                        /*num1 and color3 PURPLE and pattern3 DOT and                   shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num1 and color3 PURPLE and pattern3 DOT and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num1 and color3 PURPLE and pattern3 DOT and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }

                }
            }
            //num2
            else if (this.num === 2) {
                //num2 and color1 RED
                if (this.color === 1) {
                    stroke(255, 0, 0);
                    fill(255, 0, 0);
                    //num2 and color1 RED and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num2 and color1 RED and pattern1 BLANK and shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color1 RED and pattern1 BLANK and shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color1 RED and pattern1 BLANK and shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                    //num2 and color1 RED and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num2 and color1 RED and pattern2 FILL and shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color1 RED and pattern2 FILL and shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color1 RED and pattern2 FILL and shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                    //num2 and color1 RED and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x + ellipseLength, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x - ellipseLength, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        noFill();
                        /*num2 and color1 RED and pattern3 DOT and shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color1 RED and pattern3 DOT and  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color1 RED and pattern3 DOT and  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                }
                //num2 and color2 GREEN
                else if (this.color === 2) {
                    stroke(10, 194, 59);
                    fill(10, 194, 59);
                    //num2 and color2 GREEN and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num2 and color2 GREEN and pattern1 BLANK andshape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color2 GREEN and pattern1 BLANK andshape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color2 GREEN and pattern1 BLANK andshape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                    //num2 and color2 GREEN and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num2 and color2 GREEN and pattern2 FILL and  shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color2 GREEN and pattern2 FILL and  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color2 GREEN and pattern2 FILL and  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                    //num2 and color2 GREEN and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x + ellipseLength, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x - ellipseLength, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        noFill();
                        /*num2 and color2 GREEN and pattern3 DOT and shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color2 GREEN and pattern3 DOT and shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color2 GREEN and pattern3 DOT and shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }

                }
                //num2 and color3 PURPLE
                else if (this.color === 3) {
                    stroke(185, 11, 194);
                    fill(185, 11, 194);
                    //num2 and color3 PURPLE and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num2 and color3 PURPLE and pattern1 BLANK and                  shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color3 PURPLE and pattern1 BLANK and                  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color3 PURPLE and pattern1 BLANK and                  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                    //num2 and color3 PURPLE and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num2 and color3 PURPLE and pattern2 FILL and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color3 PURPLE and pattern2 FILL and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color3 PURPLE and pattern2 FILL and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }
                    //num2 and color3 PURPLE and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x + ellipseLength, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x - ellipseLength, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        noFill();
                        /*num2 and color3 PURPLE and pattern3 DOT and                   shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num2 and color3 PURPLE and pattern3 DOT and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength, this.y, rectLength, rectWidth);
                            rect(this.x - rectLength, this.y, rectLength, rectWidth);
                        }
                        /*num2 and color3 PURPLE and pattern3 DOT and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                            triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                        }
                    }

                }
            }
            //num3
            else if (this.num === 3) {
                //num3 and color1 RED
                if (this.color === 1) {
                    stroke(255, 0, 0);
                    fill(255, 0, 0);
                    //num3 and color1 RED and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num3 and color1 RED and pattern1 BLANK and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color1 RED and pattern1 BLANK and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color1 RED and pattern1 BLANK and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num3 and color1 RED and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num3 and color1 RED and pattern2 FILL and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color1 RED and pattern2 FILL and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color1 RED and pattern2 FILL and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num3 and color1 RED and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x + ellipseLength * 1.5, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x - ellipseLength * 1.5, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x, this.y, ellipseLength / 5,
                            ellipseLength / 5);
                        noFill();
                        /*num3 and color1 RED and pattern3 DOT and                    shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color1 RED and pattern3 DOT and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color1 RED and pattern3 DOT and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                }
                //num3 and color2 GREEN
                else if (this.color === 2) {
                    stroke(10, 194, 59);
                    fill(10, 194, 59);
                    //num3 and color2 GREEN and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num3 and color2 GREEN and pattern1 BLANK and                  shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color2 GREEN and pattern1 BLANK and                  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color2 GREEN and pattern1 BLANK and                  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num3 and color2 GREEN and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num3 and color2 GREEN and pattern2 FILL and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color2 GREEN and pattern2 FILL and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color2 GREEN and pattern2 FILL and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num3 and color2 GREEN and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x + ellipseLength * 1.5, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x - ellipseLength * 1.5, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x, this.y, ellipseLength / 5,
                            ellipseLength / 5);
                        noFill();
                        /*num3 and color2 GREEN and pattern3 DOT and                   shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color2 GREEN and pattern3 DOT and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color2 GREEN and pattern3 DOT and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }

                }
                //num3 and color3 PURPLE
                else if (this.color === 3) {
                    stroke(185, 11, 194);
                    fill(185, 11, 194);
                    //num3 and color3 PURPLE and pattern1 BLANK
                    if (this.pattern === 1) {
                        noFill();
                        /*num3 and color3 PURPLE and pattern1 BLANK and                  shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color3 PURPLE and pattern1 BLANK and                  shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color3 PURPLE and pattern1 BLANK and                  shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num3 and color3 PURPLE and pattern2 FILL
                    else if (this.pattern === 2) {
                        /*num3 and color3 PURPLE and pattern2 FILL and                    shape1 CIRLCE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color3 PURPLE and pattern2 FILL and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color3 PURPLE and pattern2 FILL and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                    //num3 and color3 PURPLE and pattern3 DOT
                    else if (this.pattern === 3) {
                        ellipse(this.x + ellipseLength * 1.5, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x - ellipseLength * 1.5, this.y,
                            ellipseLength / 5, ellipseLength / 5);
                        ellipse(this.x, this.y, ellipseLength / 5,
                            ellipseLength / 5);
                        noFill();
                        /*num3 and color3 PURPLE and pattern3 DOT and                   shape1 CIRCLE*/
                        if (this.shape === 1) {
                            ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                            ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                        }
                        /*num3 and color3 PURPLE and pattern3 DOT and                    shape2 SQUARE*/
                        else if (this.shape === 2) {
                            rect(this.x + rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x - rectLength * 1.5, this.y,
                                rectLength, rectWidth);
                            rect(this.x, this.y, rectLength, rectWidth);
                        }
                        /*num3 and color3 PURPLE and pattern3 DOT and                    shape3 TRIANGLE*/
                        else if (this.shape === 3) {
                            triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                            triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                            triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                        }
                    }
                }
            }
            strokeWeight(1);
        };

        var choice = [];

        var scene1 = function () {
            scene = 1;
            textAlign(CENTER, CENTER);
            var f = createFont("fantasy", 50);
            var g = createFont("fantasy", 100);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            textFont(f);
            text("Ready", 200, 100);
            textFont(g);
            text("SET", 200, 200);
            textFont(f);
            text("Go", 200, 300);
            fill(255, 0, 0);
            ellipse(350, 100, 50, 50);
            fill(255, 255, 0);
            ellipse(350, 200, 50, 50);
            fill(0, 255, 50);
            ellipse(350, 300, 50, 50);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(81, 166, 31);
            rect(300, 380, 50, 30);
            fill(255, 255, 255);
            textFont("monospace", 14);
            text("RULES", 370, 380);
            text("PLAY", 300, 380);
        };

        var scene2 = function () {
            scene = 2;
            textAlign(CENTER, CENTER);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            text("Object of the Game:  Quickly remove sets from the playing field.  A set is 3 cards. The deck consists of 81 distinct cards with 4 characteristics on each: color, fill, shape, and number.", 55, 150, 295, 400);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);

            cardDisplay = 1;
            var card = new Card(1, 1, 1, 1);
            card.draw();

            cardDisplay = 2;
            var yep = new Card(2, 2, 2, 2);
            yep.draw();

            cardDisplay = 3;
            var yup = new Card(3, 3, 3, 3);
            yup.draw();

            fill(0, 0, 0);
            text("Number=1, Shape=Circle, Color=Red, Pattern=Blank", 200, 100);
            text("Number=2, Shape=Square, Color=Green, Pattern=Filled", 200, 200);
            text("Number=3, Shape=Triangle, Color=Purple, Pattern=Dots", 200, 300);
        };

        var scene3 = function () {
            scene = 3;
            textAlign(CENTER, CENTER);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            text("To qualify as a set, the three cards must be all the same color or all three different colors...", 50, 50, 300, 300);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);

            cardDisplay = 4;
            var card = new Card(1, 1, 2, 1);
            card.draw();

            cardDisplay = 5;
            var yep = new Card(1, 2, 2, 1);
            yep.draw();

            cardDisplay = 6;
            var yup = new Card(1, 3, 2, 1);
            yup.draw();

            cardDisplay = 7;
            var card1 = new Card(1, 1, 1, 1);
            card1.draw();

            cardDisplay = 8;
            var yep1 = new Card(1, 1, 2, 1);
            yep1.draw();

            cardDisplay = 9;
            var yup1 = new Card(1, 1, 3, 1);
            yup1.draw();
        };

        var scene4 = function () {
            scene = 4;
            textAlign(CENTER, CENTER);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            text("...and the three cards must be all the same fill or all three different fills...", 50, 50, 300, 300);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);

            cardDisplay = 4;
            var card = new Card(1, 1, 3, 2);
            card.draw();

            cardDisplay = 5;
            var yep = new Card(1, 2, 3, 2);
            yep.draw();

            cardDisplay = 6;
            var yup = new Card(1, 3, 3, 2);
            yup.draw();

            cardDisplay = 7;
            var card1 = new Card(1, 1, 1, 1);
            card1.draw();

            cardDisplay = 8;
            var yep1 = new Card(1, 1, 1, 2);
            yep1.draw();

            cardDisplay = 9;
            var yup1 = new Card(1, 1, 1, 3);
            yup1.draw();
        };

        var scene5 = function () {
            scene = 5;
            textAlign(CENTER, CENTER);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            text("...and the three cards must be all the same shape or all three different shapes...", 50, 50, 300, 300);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);

            cardDisplay = 4;
            var card = new Card(1, 1, 1, 1);
            card.draw();

            cardDisplay = 5;
            var yep = new Card(2, 1, 1, 1);
            yep.draw();

            cardDisplay = 6;
            var yup = new Card(3, 1, 1, 1);
            yup.draw();

            cardDisplay = 7;
            var card1 = new Card(1, 1, 1, 1);
            card1.draw();

            cardDisplay = 8;
            var yep1 = new Card(1, 2, 1, 1);
            yep1.draw();

            cardDisplay = 9;
            var yup1 = new Card(1, 3, 1, 1);
            yup1.draw();
        };

        var scene6 = function () {
            scene = 6;
            textAlign(CENTER, CENTER);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            text("...and the three cards must be all the same number or all three different numbers.", 50, 50, 300, 300);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);

            cardDisplay = 4;
            var card = new Card(3, 1, 1, 1);
            card.draw();

            cardDisplay = 5;
            var yep = new Card(3, 2, 1, 1);
            yep.draw();

            cardDisplay = 6;
            var yup = new Card(3, 3, 1, 1);
            yup.draw();

            cardDisplay = 7;
            var card1 = new Card(1, 1, 1, 1);
            card1.draw();

            cardDisplay = 8;
            var yep1 = new Card(2, 1, 1, 1);
            yep1.draw();

            cardDisplay = 9;
            var yup1 = new Card(3, 1, 1, 1);
            yup1.draw();
        };

        var scene7 = function () {
            scene = 7;
            textAlign(CENTER, CENTER);
            background(164, 245, 229);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            textSize(25);
            text("SCORING", 200, 100);
            textSize(12);
            fill(9, 77, 9);
            text("Selecting a correct set adds one point", 50, 20, 300, 300);
            fill(255, 0, 0);
            text("Selecting an incorrect set subtracts one point", 50, 50, 300, 300);
            text("Shuffling while sets are present subtracts one point for each set that could have been selected. Do not shuffle unless you think there are no sets.", 50, 90, 300, 300);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);

        };

        var scene8 = function () {
            scene = 8;
            textAlign(CENTER, CENTER);
            var f = createFont("fantasy", 100);
            textFont(f);
            background(245, 164, 210);
            stroke(0, 0, 0);
            fill(0, 0, 0);
            text("PLAY", 200, 200);
            fill(81, 166, 31);
            rect(370, 380, 50, 30);
            fill(255, 255, 255);
            textFont("monospace", 15);
            text("NEXT", 370, 380);
            fill(81, 166, 31);
            rect(30, 380, 50, 30);
            fill(255, 255, 255);
            text("BACK", 30, 380);
        };

        //Play
        var scene9 = function () {
            if (scene === 9) {
                textSize(12);
                var Card = function (num, shape, color, pattern) {
                    this.x = 55;
                    this.y = 40;
                    this.l = 100;
                    this.h = 70;
                    this.num = num;
                    this.shape = shape;
                    this.color = color;
                    this.pattern = pattern;
                };
                //all possible cards (81)
                var deck = [];

                for (var a = 1; a < 4; a++) {
                    for (var b = 1; b < 4; b++) {
                        for (var c = 1; c < 4; c++) {
                            for (var d = 1; d < 4; d++) {
                                deck.push(new Card(a, b, c, d));
                            }
                        }
                    }
                }

                //all possible cards (81)
                var selected = [];

                for (var k = 0; k < 81; k++) {
                    var pick = floor(random(deck.length));
                    var cardpick = deck[pick];
                    selected.push(cardpick);
                    deck.splice(pick, 1);
                }

                //cheating and game over
                var cheating = function () {
                    var haySets = 0;
                    //recognize a set
                    if (selected.length >= 12) {
                        for (var i = 0; i < 10; i++) {
                            for (var j = 1; j < 11; j++) {
                                for (var k = 2; k < 12; k++) {
                                    if (j > i && k > j && i !== j && j !== k) {

                                        //variables of the selected cards
                                        var xOne = selected[i].x;
                                        var xTwo = selected[j].x;
                                        var xThree = selected[k].x;
                                        var yOne = selected[i].y;
                                        var yTwo = selected[j].y;
                                        var yThree = selected[k].y;
                                        var lOne = selected[i].l;
                                        var lTwo = selected[j].l;
                                        var lThree = selected[k].l;
                                        var hOne = selected[i].h;
                                        var hTwo = selected[j].h;
                                        var hThree = selected[k].h;
                                        var numOne = selected[i].num;
                                        var numTwo = selected[j].num;
                                        var numThree = selected[k].num;
                                        var shapeOne = selected[i].shape;
                                        var shapeTwo = selected[j].shape;
                                        var shapeThree = selected[k].shape;
                                        var colorOne = selected[i].color;
                                        var colorTwo = selected[j].color;
                                        var colorThree = selected[k].color;
                                        var patternOne = selected[i].pattern;
                                        var patternTwo = selected[j].pattern;
                                        var patternThree = selected[k].pattern;

                                        if ((numOne === numTwo && numTwo === numThree) || (numOne !== numTwo &&
                                            numTwo !== numThree && numOne !== numThree)) {
                                            if ((shapeOne === shapeTwo && shapeTwo === shapeThree) ||
                                                (shapeOne !== shapeTwo && shapeTwo !== shapeThree && shapeOne !== shapeThree)) {
                                                if ((colorOne === colorTwo && colorTwo === colorThree) ||
                                                    (colorOne !== colorTwo && colorTwo !== colorThree &&
                                                        colorOne !== colorThree)) {
                                                    if ((patternOne === patternTwo && patternTwo === patternThree) || (patternOne !== patternTwo && patternTwo !== patternThree && patternOne !== patternThree)) {
                                                        haySets++;

                                                        /*//show only one hint
                                                        fill(255, 132, 0);
                                                        noStroke();
                                                        rect(370,70,77,50);
                                                        fill(0, 0, 0);
                                                        text((i+1) + " , " + (j+1) + " , " + (k+1), 365,70);*/
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (selected.length === 9) {
                        for (var i = 0; i < 7; i++) {
                            for (var j = 1; j < 8; j++) {
                                for (var k = 2; k < 9; k++) {
                                    if (j > i && k > j && i !== j && j !== k) {

                                        //variables of the selected cards
                                        var xOne = selected[i].x;
                                        var xTwo = selected[j].x;
                                        var xThree = selected[k].x;
                                        var yOne = selected[i].y;
                                        var yTwo = selected[j].y;
                                        var yThree = selected[k].y;
                                        var lOne = selected[i].l;
                                        var lTwo = selected[j].l;
                                        var lThree = selected[k].l;
                                        var hOne = selected[i].h;
                                        var hTwo = selected[j].h;
                                        var hThree = selected[k].h;
                                        var numOne = selected[i].num;
                                        var numTwo = selected[j].num;
                                        var numThree = selected[k].num;
                                        var shapeOne = selected[i].shape;
                                        var shapeTwo = selected[j].shape;
                                        var shapeThree = selected[k].shape;
                                        var colorOne = selected[i].color;
                                        var colorTwo = selected[j].color;
                                        var colorThree = selected[k].color;
                                        var patternOne = selected[i].pattern;
                                        var patternTwo = selected[j].pattern;
                                        var patternThree = selected[k].pattern;

                                        if ((numOne === numTwo && numTwo === numThree) || (numOne !== numTwo &&
                                            numTwo !== numThree && numOne !== numThree)) {
                                            if ((shapeOne === shapeTwo && shapeTwo === shapeThree) ||
                                                (shapeOne !== shapeTwo && shapeTwo !== shapeThree && shapeOne !== shapeThree)) {
                                                if ((colorOne === colorTwo && colorTwo === colorThree) ||
                                                    (colorOne !== colorTwo && colorTwo !== colorThree &&
                                                        colorOne !== colorThree)) {
                                                    if ((patternOne === patternTwo && patternTwo === patternThree) || (patternOne !== patternTwo && patternTwo !== patternThree && patternOne !== patternThree)) {
                                                        haySets++;
                                                        /*//show only one hint
                                                        fill(255, 132, 0);
                                                        noStroke();
                                                        rect(370,70,77,50);
                                                        fill(0, 0, 0);
                                                        text((i+1) + " , " + (j+1) + " , " + (k+1), 365,70);*/
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (selected.length === 6) {
                        for (var i = 0; i < 4; i++) {
                            for (var j = 1; j < 5; j++) {
                                for (var k = 2; k < 6; k++) {
                                    if (j > i && k > j && i !== j && j !== k) {

                                        //variables of the selected cards
                                        var xOne = selected[i].x;
                                        var xTwo = selected[j].x;
                                        var xThree = selected[k].x;
                                        var yOne = selected[i].y;
                                        var yTwo = selected[j].y;
                                        var yThree = selected[k].y;
                                        var lOne = selected[i].l;
                                        var lTwo = selected[j].l;
                                        var lThree = selected[k].l;
                                        var hOne = selected[i].h;
                                        var hTwo = selected[j].h;
                                        var hThree = selected[k].h;
                                        var numOne = selected[i].num;
                                        var numTwo = selected[j].num;
                                        var numThree = selected[k].num;
                                        var shapeOne = selected[i].shape;
                                        var shapeTwo = selected[j].shape;
                                        var shapeThree = selected[k].shape;
                                        var colorOne = selected[i].color;
                                        var colorTwo = selected[j].color;
                                        var colorThree = selected[k].color;
                                        var patternOne = selected[i].pattern;
                                        var patternTwo = selected[j].pattern;
                                        var patternThree = selected[k].pattern;

                                        if ((numOne === numTwo && numTwo === numThree) || (numOne !== numTwo &&
                                            numTwo !== numThree && numOne !== numThree)) {
                                            if ((shapeOne === shapeTwo && shapeTwo === shapeThree) ||
                                                (shapeOne !== shapeTwo && shapeTwo !== shapeThree && shapeOne !== shapeThree)) {
                                                if ((colorOne === colorTwo && colorTwo === colorThree) ||
                                                    (colorOne !== colorTwo && colorTwo !== colorThree &&
                                                        colorOne !== colorThree)) {
                                                    if ((patternOne === patternTwo && patternTwo === patternThree) || (patternOne !== patternTwo && patternTwo !== patternThree && patternOne !== patternThree)) {
                                                        haySets++;
                                                        /*//show only one hint
                                                        fill(255, 132, 0);
                                                        noStroke();
                                                        rect(370,70,77,50);
                                                        fill(0, 0, 0);
                                                        text((i+1) + " , " + (j+1) + " , " + (k+1), 365,70);*/
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (selected.length === 3) {
                        for (var i = 0; i < 1; i++) {
                            for (var j = 1; j < 2; j++) {
                                for (var k = 2; k < 3; k++) {
                                    if (j > i && k > j && i !== j && j !== k) {

                                        //variables of the selected cards
                                        var xOne = selected[i].x;
                                        var xTwo = selected[j].x;
                                        var xThree = selected[k].x;
                                        var yOne = selected[i].y;
                                        var yTwo = selected[j].y;
                                        var yThree = selected[k].y;
                                        var lOne = selected[i].l;
                                        var lTwo = selected[j].l;
                                        var lThree = selected[k].l;
                                        var hOne = selected[i].h;
                                        var hTwo = selected[j].h;
                                        var hThree = selected[k].h;
                                        var numOne = selected[i].num;
                                        var numTwo = selected[j].num;
                                        var numThree = selected[k].num;
                                        var shapeOne = selected[i].shape;
                                        var shapeTwo = selected[j].shape;
                                        var shapeThree = selected[k].shape;
                                        var colorOne = selected[i].color;
                                        var colorTwo = selected[j].color;
                                        var colorThree = selected[k].color;
                                        var patternOne = selected[i].pattern;
                                        var patternTwo = selected[j].pattern;
                                        var patternThree = selected[k].pattern;

                                        if ((numOne === numTwo && numTwo === numThree) || (numOne !== numTwo &&
                                            numTwo !== numThree && numOne !== numThree)) {
                                            if ((shapeOne === shapeTwo && shapeTwo === shapeThree) ||
                                                (shapeOne !== shapeTwo && shapeTwo !== shapeThree && shapeOne !== shapeThree)) {
                                                if ((colorOne === colorTwo && colorTwo === colorThree) ||
                                                    (colorOne !== colorTwo && colorTwo !== colorThree &&
                                                        colorOne !== colorThree)) {
                                                    if ((patternOne === patternTwo && patternTwo === patternThree) || (patternOne !== patternTwo && patternTwo !== patternThree && patternOne !== patternThree)) {
                                                        haySets++;
                                                        /*//show only one hint
                                                        fill(255, 132, 0);
                                                        noStroke();
                                                        rect(370,70,77,50);
                                                        fill(0, 0, 0);
                                                        text((i+1) + " , " + (j+1) + " , " + (k+1), 365,70);*/
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (haySets === 0 && selected.length <= 12) {
                        //game over
                        noSets.push(1);
                        background(255, 0, 255);
                        fill(0, 0, 0);
                        textSize(50);
                        text("GAME OVER", 200, 100);
                        textSize(25);
                        text("SETS: " + sets, 200, 200);
                        //high score-can we make it universal?
                        text("HIGH SCORE: 21", 200, 300);
                    }

                };

                var limitChoice = function () {
                    var cardNum = 0;
                    //which card the mouse clicked, the boundaries
                    if (mouseX >= (55 - 50) && mouseX <= (55 + 50) && mouseY >= (40 - 35) && mouseY <= (40 + 35)) {
                        cardNum = 1;
                    } else if (mouseX >= (165 - 50) && mouseX <= (165 + 50) && mouseY >= (40 - 35) && mouseY <= (40 + 35)) {
                        cardNum = 2;
                    } else if (mouseX >= (275 - 50) && mouseX <= (275 + 50) && mouseY >= (40 - 35) && mouseY <= (40 + 35)) {
                        cardNum = 3;
                    } else if (mouseX >= (55 - 50) && mouseX <= (55 + 50) && mouseY >= (120 - 35) && mouseY <= (120 + 35)) {
                        cardNum = 4;
                    } else if (mouseX >= (165 - 50) && mouseX <= (165 + 50) && mouseY >= (120 - 35) && mouseY <= (120 + 35)) {
                        cardNum = 5;
                    } else if (mouseX >= (275 - 50) && mouseX <= (275 + 50) && mouseY >= (120 - 35) && mouseY <= (120 + 35)) {
                        cardNum = 6;
                    } else if (mouseX >= (55 - 50) && mouseX <= (55 + 50) && mouseY >= (200 - 35) && mouseY <= (200 + 35)) {
                        cardNum = 7;
                    } else if (mouseX >= (165 - 50) && mouseX <= (165 + 50) && mouseY >= (200 - 35) && mouseY <= (200 + 35)) {
                        cardNum = 8;
                    } else if (mouseX >= (275 - 50) && mouseX <= (275 + 50) && mouseY >= (200 - 35) && mouseY <= (200 + 35)) {
                        cardNum = 9;
                    } else if (mouseX >= (55 - 50) && mouseX <= (55 + 50) && mouseY >= (280 - 35) && mouseY <= (280 + 35)) {
                        cardNum = 10;
                    } else if (mouseX >= (165 - 50) && mouseX <= (165 + 50) && mouseY >= (280 - 35) && mouseY <= (280 + 35)) {
                        cardNum = 11;
                    } else if (mouseX >= (275 - 50) && mouseX <= (275 + 50) && mouseY >= (280 - 35) && mouseY <= (280 + 35)) {
                        cardNum = 12;
                    }
                    //if game not over
                    if (noSets.length === 0) {
                        strokeWeight(5);
                        //clicking on cards
                        //card 1
                        if (cardNum === 1 && choice[0] !== 1 && choice[1] !== 1) {
                            stroke(255, 240, 69);
                            rect(55, 40, 100, 70);
                            choice.push(1);
                        } else if (cardNum === 1 && choice[0] === 1) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 1 && choice[1] === 1) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 2
                        else if (cardNum === 2 && choice[0] !== 2 && choice[1] !== 2) {
                            stroke(255, 240, 69);
                            rect(165, 40, 100, 70);
                            choice.push(2);
                        } else if (cardNum === 2 && choice[0] === 2) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 2 && choice[1] === 2) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 3
                        else if (cardNum === 3 && choice[0] !== 3 && choice[1] !== 3) {
                            stroke(255, 240, 69);
                            rect(275, 40, 100, 70);
                            choice.push(3);
                        } else if (cardNum === 3 && choice[0] === 3) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 3 && choice[1] === 3) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 4
                        else if (cardNum === 4 && choice[0] !== 4 && choice[1] !== 4 && selected.length > 3) {
                            stroke(255, 240, 69);
                            rect(55, 120, 100, 70);
                            choice.push(4);
                        } else if (cardNum === 4 && choice[0] === 4) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 4 && choice[1] === 4) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 5
                        else if (cardNum === 5 && choice[0] !== 5 && choice[1] !== 5 && selected.length > 3) {
                            stroke(255, 240, 69);
                            rect(165, 120, 100, 70);
                            choice.push(5);
                        } else if (cardNum === 5 && choice[0] === 5) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 5 && choice[1] === 5) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 6
                        else if (cardNum === 6 && choice[0] !== 6 && choice[1] !== 6 && selected.length > 3) {
                            stroke(255, 240, 69);
                            rect(275, 120, 100, 70);
                            choice.push(6);
                        } else if (cardNum === 6 && choice[0] === 6) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 6 && choice[1] === 6) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 7
                        else if (cardNum === 7 && choice[0] !== 7 && choice[1] !== 7 && selected.length > 6) {
                            stroke(255, 240, 69);
                            rect(55, 200, 100, 70);
                            choice.push(7);
                        } else if (cardNum === 7 && choice[0] === 7) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 7 && choice[1] === 7) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 8
                        else if (cardNum === 8 && choice[0] !== 8 && choice[1] !== 8 && selected.length > 6) {
                            stroke(255, 240, 69);
                            rect(165, 200, 100, 70);
                            choice.push(8);
                        } else if (cardNum === 8 && choice[0] === 8) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 8 && choice[1] === 8) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 9
                        else if (cardNum === 9 && choice[0] !== 9 && choice[1] !== 9 && selected.length > 6) {
                            stroke(255, 240, 69);
                            rect(275, 200, 100, 70);
                            choice.push(9);
                        } else if (cardNum === 9 && choice[0] === 9) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 9 && choice[1] === 9) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 10
                        else if (cardNum === 10 && choice[0] !== 10 && choice[1] !== 10 && selected.length > 9) {
                            stroke(255, 240, 69);
                            rect(55, 280, 100, 70);
                            choice.push(10);
                        } else if (cardNum === 10 && choice[0] === 10) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 10 && choice[1] === 10) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 11
                        else if (cardNum === 11 && choice[0] !== 11 && choice[1] !== 11 && selected.length > 9) {
                            stroke(255, 240, 69);
                            rect(165, 280, 100, 70);
                            choice.push(11);
                        } else if (cardNum === 11 && choice[0] === 11) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 11 && choice[1] === 11) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        //card 12
                        else if (cardNum === 12 && choice[0] !== 12 && choice[1] !== 12 && selected.length > 9) {
                            stroke(255, 240, 69);
                            rect(275, 280, 100, 70);
                            choice.push(12);
                        } else if (cardNum === 12 && choice[0] === 12) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                            //splice the first choice (0) and one card (1)
                            choice.splice(0, 1);
                        } else if (cardNum === 12 && choice[1] === 12) {
                            //take off yellow selection box
                            noFill();
                            stroke(255, 255, 255);
                            strokeWeight(5);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //put back black card box
                            strokeWeight(1);
                            stroke(0, 0, 0);
                            rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                            //splice the first choice (1) and one card (1)
                            choice.splice(1, 1);
                        }
                        strokeWeight(1);
                    }
                };


                //position of cards
                var cardDisplay = 1;

                /*shape1 is circle. shape2 is square. shape3 is triangle.
                pattern1 is blank. pattern2 is filled. pattern3 is dotted
                color1 is red. color2 is green. color3 is purple
                face up*/

                Card.prototype.draw = function () {

                    if (cardDisplay === 1) {
                        this.x = 55;
                        this.y = 40;
                    } else if (cardDisplay === 2) {
                        this.x = 165;
                        this.y = 40;
                    } else if (cardDisplay === 3) {
                        this.x = 275;
                        this.y = 40;
                    } else if (cardDisplay === 4) {
                        this.x = 55;
                        this.y = 120;
                    } else if (cardDisplay === 5) {
                        this.x = 165;
                        this.y = 120;
                    } else if (cardDisplay === 6) {
                        this.x = 275;
                        this.y = 120;
                    } else if (cardDisplay === 7) {
                        this.x = 55;
                        this.y = 200;
                    } else if (cardDisplay === 8) {
                        this.x = 165;
                        this.y = 200;
                    } else if (cardDisplay === 9) {
                        this.x = 275;
                        this.y = 200;
                    } else if (cardDisplay === 10) {
                        this.x = 55;
                        this.y = 280;
                    } else if (cardDisplay === 11) {
                        this.x = 165;
                        this.y = 280;
                    } else if (cardDisplay === 12) {
                        this.x = 275;
                        this.y = 280;
                    } else if (cardDisplay === 13) {
                        this.x = 55;
                        this.y = 360;
                    } else if (cardDisplay === 14) {
                        this.x = 165;
                        this.y = 360;
                    } else if (cardDisplay === 15) {
                        this.x = 275;
                        this.y = 360;
                    }
                    //background(255, 255, 255);
                    fill(255, 255, 255);
                    noFill();
                    stroke(0, 0, 0);
                    rect(this.x, this.y, this.l, this.h);
                    var ellipseLength = (this.l + this.h) / 9;
                    var ellipseWidth = (this.l + this.h) / 9;
                    var rectLength = (this.l + this.h) / 9;
                    var rectWidth = (this.l + this.h) / 9;
                    var tx1 = this.x - (this.l + this.h) / 15;
                    var ty1 = this.y - (this.l + this.h) / 25;
                    var tx2 = this.x + (this.l + this.h) / 15;
                    var ty2 = this.y - (this.l + this.h) / 25;
                    var tx3 = this.x;
                    var ty3 = this.y + (this.l + this.h) / 15;
                    strokeWeight(3);
                    //num1
                    if (this.num === 1) {
                        //num1 and color1 RED
                        if (this.color === 1) {
                            stroke(255, 0, 0);
                            fill(255, 0, 0);
                            //num1 and color1 RED and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num1 and color1 RED and pattern1 BLANK and shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color1 RED and pattern1 BLANK and shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color1 RED and pattern1 BLANK and shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num1 and color1 RED and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num1 and color1 RED and pattern2 FILL and shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color1 RED and pattern2 FILL and shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color1 RED and pattern2 FILL and shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num1 and color1 RED and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x, this.y, ellipseLength / 5, ellipseLength / 5);
                                noFill();
                                /*num1 and color1 RED and pattern3 DOT and shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color1 RED and pattern3 DOT and shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color1 RED and pattern3 DOT and shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                        }
                        //num1 and color2 GREEN
                        else if (this.color === 2) {
                            stroke(10, 194, 59);
                            fill(10, 194, 59);
                            //num1 and color2 GREEN and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num1 and color2 GREEN and pattern1 BLANK and                  shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color2 GREEN and pattern1 BLANK and                  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color2 GREEN and pattern1 BLANK and                  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num1 and color2 GREEN and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num1 and color2 GREEN and pattern2 FILL and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color2 GREEN and pattern2 FILL and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color2 GREEN and pattern2 FILL and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num1 and color2 GREEN and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x, this.y, ellipseLength / 5,
                                    ellipseLength / 5);
                                noFill();
                                /*num1 and color2 GREEN and pattern3 DOT and                   shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color2 GREEN and pattern3 DOT and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color2 GREEN and pattern3 DOT and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }

                        }
                        //num1 and color3 PURPLE
                        else if (this.color === 3) {
                            stroke(185, 11, 194);
                            fill(185, 11, 194);
                            //num1 and color3 PURPLE and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num1 and color3 PURPLE and pattern1 BLANK and                  shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color3 PURPLE and pattern1 BLANK and                  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color3 PURPLE and pattern1 BLANK and                  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num1 and color3 PURPLE and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num1 and color3 PURPLE and pattern2 FILL and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color3 PURPLE and pattern2 FILL and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color3 PURPLE and pattern2 FILL and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num1 and color3 PURPLE and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x, this.y, ellipseLength / 5,
                                    ellipseLength / 5);
                                noFill();
                                /*num1 and color3 PURPLE and pattern3 DOT and                   shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num1 and color3 PURPLE and pattern3 DOT and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num1 and color3 PURPLE and pattern3 DOT and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }

                        }
                    }
                    //num2
                    else if (this.num === 2) {
                        //num2 and color1 RED
                        if (this.color === 1) {
                            stroke(255, 0, 0);
                            fill(255, 0, 0);
                            //num2 and color1 RED and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num2 and color1 RED and pattern1 BLANK and shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color1 RED and pattern1 BLANK and shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color1 RED and pattern1 BLANK and shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                            //num2 and color1 RED and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num2 and color1 RED and pattern2 FILL and shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color1 RED and pattern2 FILL and shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color1 RED and pattern2 FILL and shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                            //num2 and color1 RED and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x + ellipseLength, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x - ellipseLength, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                noFill();
                                /*num2 and color1 RED and pattern3 DOT and shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color1 RED and pattern3 DOT and  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color1 RED and pattern3 DOT and  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                        }
                        //num2 and color2 GREEN
                        else if (this.color === 2) {
                            stroke(10, 194, 59);
                            fill(10, 194, 59);
                            //num2 and color2 GREEN and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num2 and color2 GREEN and pattern1 BLANK andshape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color2 GREEN and pattern1 BLANK andshape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color2 GREEN and pattern1 BLANK andshape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                            //num2 and color2 GREEN and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num2 and color2 GREEN and pattern2 FILL and  shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color2 GREEN and pattern2 FILL and  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color2 GREEN and pattern2 FILL and  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                            //num2 and color2 GREEN and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x + ellipseLength, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x - ellipseLength, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                noFill();
                                /*num2 and color2 GREEN and pattern3 DOT and shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color2 GREEN and pattern3 DOT and shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color2 GREEN and pattern3 DOT and shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }

                        }
                        //num2 and color3 PURPLE
                        else if (this.color === 3) {
                            stroke(185, 11, 194);
                            fill(185, 11, 194);
                            //num2 and color3 PURPLE and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num2 and color3 PURPLE and pattern1 BLANK and                  shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color3 PURPLE and pattern1 BLANK and                  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color3 PURPLE and pattern1 BLANK and                  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                            //num2 and color3 PURPLE and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num2 and color3 PURPLE and pattern2 FILL and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color3 PURPLE and pattern2 FILL and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color3 PURPLE and pattern2 FILL and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }
                            //num2 and color3 PURPLE and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x + ellipseLength, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x - ellipseLength, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                noFill();
                                /*num2 and color3 PURPLE and pattern3 DOT and                   shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num2 and color3 PURPLE and pattern3 DOT and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength, this.y, rectLength, rectWidth);
                                    rect(this.x - rectLength, this.y, rectLength, rectWidth);
                                }
                                /*num2 and color3 PURPLE and pattern3 DOT and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength, ty1, tx2 + rectLength, ty2, tx3 + rectLength, ty3);
                                    triangle(tx1 - rectLength, ty1, tx2 - rectLength, ty2, tx3 - rectLength, ty3);
                                }
                            }

                        }
                    }
                    //num3
                    else if (this.num === 3) {
                        //num3 and color1 RED
                        if (this.color === 1) {
                            stroke(255, 0, 0);
                            fill(255, 0, 0);
                            //num3 and color1 RED and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num3 and color1 RED and pattern1 BLANK and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color1 RED and pattern1 BLANK and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color1 RED and pattern1 BLANK and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num3 and color1 RED and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num3 and color1 RED and pattern2 FILL and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color1 RED and pattern2 FILL and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color1 RED and pattern2 FILL and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num3 and color1 RED and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x + ellipseLength * 1.5, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x - ellipseLength * 1.5, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x, this.y, ellipseLength / 5,
                                    ellipseLength / 5);
                                noFill();
                                /*num3 and color1 RED and pattern3 DOT and                    shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color1 RED and pattern3 DOT and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color1 RED and pattern3 DOT and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                        }
                        //num3 and color2 GREEN
                        else if (this.color === 2) {
                            stroke(10, 194, 59);
                            fill(10, 194, 59);
                            //num3 and color2 GREEN and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num3 and color2 GREEN and pattern1 BLANK and                  shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color2 GREEN and pattern1 BLANK and                  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color2 GREEN and pattern1 BLANK and                  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num3 and color2 GREEN and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num3 and color2 GREEN and pattern2 FILL and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color2 GREEN and pattern2 FILL and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color2 GREEN and pattern2 FILL and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num3 and color2 GREEN and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x + ellipseLength * 1.5, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x - ellipseLength * 1.5, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x, this.y, ellipseLength / 5,
                                    ellipseLength / 5);
                                noFill();
                                /*num3 and color2 GREEN and pattern3 DOT and                   shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color2 GREEN and pattern3 DOT and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color2 GREEN and pattern3 DOT and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }

                        }
                        //num3 and color3 PURPLE
                        else if (this.color === 3) {
                            stroke(185, 11, 194);
                            fill(185, 11, 194);
                            //num3 and color3 PURPLE and pattern1 BLANK
                            if (this.pattern === 1) {
                                noFill();
                                /*num3 and color3 PURPLE and pattern1 BLANK and                  shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color3 PURPLE and pattern1 BLANK and                  shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color3 PURPLE and pattern1 BLANK and                  shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num3 and color3 PURPLE and pattern2 FILL
                            else if (this.pattern === 2) {
                                /*num3 and color3 PURPLE and pattern2 FILL and                    shape1 CIRLCE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color3 PURPLE and pattern2 FILL and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color3 PURPLE and pattern2 FILL and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                            //num3 and color3 PURPLE and pattern3 DOT
                            else if (this.pattern === 3) {
                                ellipse(this.x + ellipseLength * 1.5, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x - ellipseLength * 1.5, this.y,
                                    ellipseLength / 5, ellipseLength / 5);
                                ellipse(this.x, this.y, ellipseLength / 5,
                                    ellipseLength / 5);
                                noFill();
                                /*num3 and color3 PURPLE and pattern3 DOT and                   shape1 CIRCLE*/
                                if (this.shape === 1) {
                                    ellipse(this.x + ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x - ellipseLength * 1.5, this.y, ellipseLength, ellipseWidth);
                                    ellipse(this.x, this.y, ellipseLength, ellipseWidth);
                                }
                                /*num3 and color3 PURPLE and pattern3 DOT and                    shape2 SQUARE*/
                                else if (this.shape === 2) {
                                    rect(this.x + rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x - rectLength * 1.5, this.y,
                                        rectLength, rectWidth);
                                    rect(this.x, this.y, rectLength, rectWidth);
                                }
                                /*num3 and color3 PURPLE and pattern3 DOT and                    shape3 TRIANGLE*/
                                else if (this.shape === 3) {
                                    triangle(tx1 + rectLength * 1.5, ty1, tx2 + rectLength * 1.5, ty2, tx3 + rectLength * 1.5, ty3);
                                    triangle(tx1 - rectLength * 1.5, ty1, tx2 - rectLength * 1.5, ty2, tx3 - rectLength * 1.5, ty3);
                                    triangle(tx1, ty1, tx2, ty2, tx3, ty3);
                                }
                            }
                        }
                    }
                    strokeWeight(1);
                };

                //shuffle button
                var button1 = {
                    x: 360,
                    y: 21,
                    l: 60,
                    w: 32,
                    txt: "SHUFFLE"
                };

                var drawButtons = function (button) {
                    stroke(0, 0, 0);
                    fill(136, 116, 247);
                    rect(button.x, button.y, button.l, button.w);
                    fill(0, 0, 0);
                    textAlign(CENTER, CENTER);
                    text(button.txt, button.x, button.y);
                };

                drawButtons(button1);

                var isMouseInside = function (button) {
                    if (noSets.length === 0) {
                        return (mouseX >= (button.x - button.l / 2) &&
                            mouseX <= (button.x + button.l / 2) &&
                            mouseY >= (button.y - button.w / 2) &&
                            mouseY <= (button.y + button.w / 2));
                    }
                };

                //display 12 cards
                for (var m = 1; m <= 12; m++) {
                    var cardDisplay = m;
                    selected[m - 1].draw();
                }


                textAlign(CENTER, CENTER);
                fill(0, 0, 0);
                text("SETS", 365, 180);
                var sets = 0;

                if (noSets.length === 0) {
                    //white box
                    noStroke();
                    fill(255, 255, 255);
                    rect(200, 350, width, 60);
                }


                //can only select 3 cards
                //is it a SET? count sets
                mouseClicked = function () {
                    if (noSets.length === 0) {
                        //white box
                        noStroke();
                        fill(255, 255, 255);
                        rect(200, 350, width, 60);

                        //subtract points for shuffling
                        var haySets = 0;
                        //recognize a set
                        if (selected.length >= 12) {
                            for (var i = 0; i < 10; i++) {
                                for (var j = 1; j < 11; j++) {
                                    for (var k = 2; k < 12; k++) {
                                        if (j > i && k > j && i !== j && j !== k) {

                                            //variables of the selected cards
                                            var xOne = selected[i].x;
                                            var xTwo = selected[j].x;
                                            var xThree = selected[k].x;
                                            var yOne = selected[i].y;
                                            var yTwo = selected[j].y;
                                            var yThree = selected[k].y;
                                            var lOne = selected[i].l;
                                            var lTwo = selected[j].l;
                                            var lThree = selected[k].l;
                                            var hOne = selected[i].h;
                                            var hTwo = selected[j].h;
                                            var hThree = selected[k].h;
                                            var numOne = selected[i].num;
                                            var numTwo = selected[j].num;
                                            var numThree = selected[k].num;
                                            var shapeOne = selected[i].shape;
                                            var shapeTwo = selected[j].shape;
                                            var shapeThree = selected[k].shape;
                                            var colorOne = selected[i].color;
                                            var colorTwo = selected[j].color;
                                            var colorThree = selected[k].color;
                                            var patternOne = selected[i].pattern;
                                            var patternTwo = selected[j].pattern;
                                            var patternThree = selected[k].pattern;

                                            if ((numOne === numTwo && numTwo === numThree) || (numOne !== numTwo &&
                                                numTwo !== numThree && numOne !== numThree)) {
                                                if ((shapeOne === shapeTwo && shapeTwo === shapeThree) ||
                                                    (shapeOne !== shapeTwo && shapeTwo !== shapeThree && shapeOne !== shapeThree)) {
                                                    if ((colorOne === colorTwo && colorTwo === colorThree) ||
                                                        (colorOne !== colorTwo && colorTwo !== colorThree &&
                                                            colorOne !== colorThree)) {
                                                        if ((patternOne === patternTwo && patternTwo === patternThree) || (patternOne !== patternTwo && patternTwo !== patternThree && patternOne !== patternThree)) {
                                                            haySets++;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (haySets > 0 && isMouseInside(button1)) {
                            sets = sets - haySets;
                            fill(255, 255, 0);
                            rect(365, 200, 50, 10);
                            fill(0, 0, 0);
                            text(sets, 365, 200);
                        }

                        //replace last 3 cards with new cards SHUFFLE
                        if (isMouseInside(button1) && selected.length > 12) {
                            if (choice.length === 0) {
                                selected.push(selected[9]);
                                selected.splice(9, 1);
                                selected.push(selected[9]);
                                selected.splice(9, 1);
                                selected.push(selected[9]);
                                selected.splice(9, 1);

                                fill(255, 255, 255);
                                stroke(255, 255, 255);
                                rect(55, 280, 100, 70);
                                rect(165, 280, 100, 70);
                                rect(275, 280, 100, 70);

                                cardDisplay = 10;
                                selected[9].draw();
                                cardDisplay = 11;
                                selected[10].draw();
                                cardDisplay = 12;
                                selected[11].draw();

                                cheating();
                            }
                            if (choice.length === 1) {
                                //take off yellow selection box
                                noFill();
                                stroke(255, 255, 255);
                                strokeWeight(5);
                                rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                                //put back black card box
                                strokeWeight(1);
                                stroke(0, 0, 0);
                                rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                                choice.splice(0, 3);

                                selected.push(selected[9]);
                                selected.splice(9, 1);
                                selected.push(selected[9]);
                                selected.splice(9, 1);
                                selected.push(selected[9]);
                                selected.splice(9, 1);

                                fill(255, 255, 255);
                                stroke(255, 255, 255);
                                rect(55, 280, 100, 70);
                                rect(165, 280, 100, 70);
                                rect(275, 280, 100, 70);

                                cardDisplay = 10;
                                selected[9].draw();
                                cardDisplay = 11;
                                selected[10].draw();
                                cardDisplay = 12;
                                selected[11].draw();

                                cheating();
                            }
                            if (choice.length === 2) {
                                //take off yellow selection box
                                noFill();
                                stroke(255, 255, 255);
                                strokeWeight(5);
                                rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                                rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                                //put back black card box
                                strokeWeight(1);
                                stroke(0, 0, 0);
                                rect(selected[choice[0] - 1].x, selected[choice[0] - 1].y, selected[choice[0] - 1].l, selected[choice[0] - 1].h);
                                rect(selected[choice[1] - 1].x, selected[choice[1] - 1].y, selected[choice[1] - 1].l, selected[choice[1] - 1].h);
                                choice.splice(0, 3);

                                selected.push(selected[9]);
                                selected.splice(9, 1);
                                selected.push(selected[9]);
                                selected.splice(9, 1);
                                selected.push(selected[9]);
                                selected.splice(9, 1);

                                fill(255, 255, 255);
                                stroke(255, 255, 255);
                                rect(55, 280, 100, 70);
                                rect(165, 280, 100, 70);
                                rect(275, 280, 100, 70);

                                cardDisplay = 10;
                                selected[9].draw();
                                cardDisplay = 11;
                                selected[10].draw();
                                cardDisplay = 12;
                                selected[11].draw();

                                cheating();
                            }
                        }

                        noFill();
                        if (choice.length < 3) {
                            limitChoice();
                        }


                        //variables of the selected cards
                        var xA = selected[choice[0] - 1].x;
                        var xB = selected[choice[1] - 1].x;
                        var xC = selected[choice[2] - 1].x;
                        var yA = selected[choice[0] - 1].y;
                        var yB = selected[choice[1] - 1].y;
                        var yC = selected[choice[2] - 1].y;
                        var lA = selected[choice[0] - 1].l;
                        var lB = selected[choice[1] - 1].l;
                        var lC = selected[choice[2] - 1].l;
                        var hA = selected[choice[0] - 1].h;
                        var hB = selected[choice[1] - 1].h;
                        var hC = selected[choice[2] - 1].h;
                        var numA = selected[choice[0] - 1].num;
                        var numB = selected[choice[1] - 1].num;
                        var numC = selected[choice[2] - 1].num;
                        var shapeA = selected[choice[0] - 1].shape;
                        var shapeB = selected[choice[1] - 1].shape;
                        var shapeC = selected[choice[2] - 1].shape;
                        var colorA = selected[choice[0] - 1].color;
                        var colorB = selected[choice[1] - 1].color;
                        var colorC = selected[choice[2] - 1].color;
                        var patternA = selected[choice[0] - 1].pattern;
                        var patternB = selected[choice[1] - 1].pattern;
                        var patternC = selected[choice[2] - 1].pattern;


                        var isSet = false;

                        //take off yellow selection
                        stroke(255, 255, 255);
                        strokeWeight(5);
                        rect(xA, yA, lA, hA);
                        rect(xB, yB, lB, hB);
                        rect(xC, yC, lC, hC);
                        strokeWeight(1);


                        if ((numA === numB && numB === numC) || (numA !== numB &&
                            numB !== numC && numA !== numC)) {
                            if ((shapeA === shapeB && shapeB === shapeC) ||
                                (shapeA !== shapeB && shapeB !== shapeC && shapeA !== shapeC)) {
                                if ((colorA === colorB && colorB === colorC) ||
                                    (colorA !== colorB && colorB !== colorC &&
                                        colorA !== colorC)) {
                                    if ((patternA === patternB && patternB === patternC) || (patternA !== patternB && patternB !== patternC && patternA !== patternC)) {
                                        isSet = true;
                                        fill(0, 0, 0);
                                        text("SET!", 200, 350);
                                    } else {
                                        //red box
                                        noStroke();
                                        fill(255, 0, 0);
                                        rect(200, 350, width, 60);
                                        fill(0, 0, 0);
                                        text("NOT A SET", 200, 350);
                                        //subtract for incorrect set
                                        sets = sets - 1;
                                        fill(255, 255, 0);
                                        rect(365, 200, 50, 10);
                                        fill(0, 0, 0);
                                        text(sets, 365, 200);
                                    }
                                } else {
                                    //red box
                                    noStroke();
                                    fill(255, 0, 0);
                                    rect(200, 350, width, 60);
                                    fill(0, 0, 0);
                                    text("NOT A SET", 200, 350);
                                    //subtract for incorrect set
                                    sets = sets - 1;
                                    fill(255, 255, 0);
                                    rect(365, 200, 50, 10);
                                    fill(0, 0, 0);
                                    text(sets, 365, 200);
                                }
                            } else {
                                //red box
                                noStroke();
                                fill(255, 0, 0);
                                rect(200, 350, width, 60);
                                fill(0, 0, 0);
                                text("NOT A SET", 200, 350);
                                //subtract for incorrect set
                                sets = sets - 1;
                                fill(255, 255, 0);
                                rect(365, 200, 50, 10);
                                fill(0, 0, 0);
                                text(sets, 365, 200);
                            }
                        } else {
                            //red box
                            noStroke();
                            fill(255, 0, 0);
                            rect(200, 350, width, 60);
                            fill(0, 0, 0);
                            text("NOT A SET", 200, 350);
                            //subtract for incorrect set
                            sets = sets - 1;
                            fill(255, 255, 0);
                            rect(365, 200, 50, 10);
                            fill(0, 0, 0);
                            text(sets, 365, 200);
                        }

                        //what happens if it is a SET
                        if (isSet) {
                            sets++;
                            noStroke();
                            fill(255, 255, 0);
                            rect(365, 200, 50, 10);
                            fill(0, 0, 0);
                            text(sets, 365, 200);
                            fill(255, 255, 255);
                            stroke(255, 255, 255);
                            rect(xA, yA, lA, hA);
                            rect(xB, yB, lB, hB);
                            rect(xC, yC, lC, hC);
                            if (selected.length > 12) {
                                //take away set
                                selected.splice((choice[0] - 1), 1);
                                if (choice[0] < choice[1] && choice[0] < choice[2]) {
                                    selected.splice((choice[1] - 2), 1);
                                    if (choice[1] < choice[2]) {
                                        selected.splice((choice[2] - 3), 1);
                                        selected.splice((choice[0] - 1), 0, selected[9]);
                                        selected.splice((9 + 1), 1);
                                        selected.splice((choice[1] - 1), 0, selected[9 + 1]);
                                        selected.splice((9 + 2), 1);
                                        selected.splice((choice[2] - 1), 0, selected[9 + 2]);
                                        selected.splice((9 + 3), 1);
                                    } else if (choice[2] < choice[1]) {
                                        selected.splice((choice[2] - 2), 1);
                                        selected.splice((choice[0] - 1), 0, selected[9]);
                                        selected.splice((9 + 1), 1);
                                        selected.splice((choice[1] - 2), 0, selected[9 + 1]);
                                        selected.splice((9 + 2), 1);
                                        selected.splice((choice[2] - 1), 0, selected[9 + 2]);
                                        selected.splice((9 + 3), 1);
                                    }
                                } else if (choice[1] < choice[0] && choice[1] < choice[2]) {
                                    selected.splice((choice[1] - 1), 1);
                                    if (choice[2] < choice[0]) {
                                        selected.splice((choice[2] - 2), 1);
                                        selected.splice((choice[0] - 3), 0, selected[9]);
                                        selected.splice((9 + 1), 1);
                                        selected.splice((choice[1] - 1), 0, selected[9 + 1]);
                                        selected.splice((9 + 2), 1);
                                        selected.splice((choice[2] - 1), 0, selected[9 + 2]);
                                        selected.splice((9 + 3), 1);
                                    } else if (choice[0] < choice[2]) {
                                        selected.splice((choice[2] - 3), 1);
                                        selected.splice((choice[0] - 2), 0, selected[9]);
                                        selected.splice((9 + 1), 1);
                                        selected.splice((choice[1] - 1), 0, selected[9 + 1]);
                                        selected.splice((9 + 2), 1);
                                        selected.splice((choice[2] - 1), 0, selected[9 + 2]);
                                        selected.splice((9 + 3), 1);
                                    }
                                } else if (choice[2] < choice[0] && choice[0] < choice[1]) {
                                    selected.splice((choice[1] - 2), 1);
                                    selected.splice((choice[2] - 1), 1);
                                    selected.splice((choice[0] - 2), 0, selected[9]);
                                    selected.splice((9 + 1), 1);
                                    selected.splice((choice[1] - 2), 0, selected[9 + 1]);
                                    selected.splice((9 + 2), 1);
                                    selected.splice((choice[2] - 1), 0, selected[9 + 2]);
                                    selected.splice((9 + 3), 1);
                                } else if (choice[2] < choice[1] && choice[1] < choice[0]) {
                                    selected.splice((choice[1] - 1), 1);
                                    selected.splice((choice[2] - 1), 1);
                                    selected.splice((choice[0] - 3), 0, selected[9]);
                                    selected.splice((9 + 1), 1);
                                    selected.splice((choice[1] - 2), 0, selected[9 + 1]);
                                    selected.splice((9 + 2), 1);
                                    selected.splice((choice[2] - 1), 0, selected[9 + 2]);
                                    selected.splice((9 + 3), 1);
                                }
                                //draw new cards
                                cardDisplay = choice[0];
                                selected[choice[0] - 1].draw();
                                cardDisplay = choice[1];
                                selected[choice[1] - 1].draw();
                                cardDisplay = choice[2];
                                selected[choice[2] - 1].draw();

                                //repick
                                choice.splice(0, 3);
                                //CHEATING
                                cheating();
                            } else if (selected.length <= 12) {
                                //take away set
                                selected.splice((choice[0] - 1), 1);
                                if (choice[0] < choice[1] && choice[0] < choice[2]) {
                                    selected.splice((choice[1] - 2), 1);
                                    if (choice[1] < choice[2]) {
                                        selected.splice((choice[2] - 3), 1);
                                    } else if (choice[2] < choice[1]) {
                                        selected.splice((choice[2] - 2), 1);
                                    }
                                } else if (choice[1] < choice[0] && choice[1] < choice[2]) {
                                    selected.splice((choice[1] - 1), 1);
                                    if (choice[2] < choice[0]) {
                                        selected.splice((choice[2] - 2), 1);
                                    } else if (choice[0] < choice[2]) {
                                        selected.splice((choice[2] - 3), 1);
                                    }
                                } else if (choice[2] < choice[0] && choice[0] < choice[1]) {
                                    selected.splice((choice[1] - 2), 1);
                                    selected.splice((choice[2] - 1), 1);
                                } else if (choice[2] < choice[1] && choice[1] < choice[0]) {
                                    selected.splice((choice[1] - 1), 1);
                                    selected.splice((choice[2] - 1), 1);
                                }
                                //display cards
                                if (selected.length === 9) {
                                    fill(255, 255, 255);
                                    rect(165, 160, 322, 312);
                                    for (var m = 1; m <= 9; m++) {
                                        cardDisplay = m;
                                        selected[m - 1].draw();
                                    }
                                }
                                if (selected.length === 6) {
                                    fill(255, 255, 255);
                                    rect(165, 160, 322, 312);
                                    for (var m = 1; m <= 6; m++) {
                                        cardDisplay = m;
                                        selected[m - 1].draw();
                                    }
                                }
                                if (selected.length === 3) {
                                    fill(255, 255, 255);
                                    rect(165, 160, 322, 312);
                                    for (var m = 1; m <= 3; m++) {
                                        cardDisplay = m;
                                        selected[m - 1].draw();
                                    }
                                }

                                //repick
                                choice.splice(0, 3);
                                //CHEATING
                                cheating();
                            }

                        } else if (isSet === false) {
                            noFill();
                            stroke(0, 0, 0);
                            rect(xA, yA, lA, hA);
                            rect(xB, yB, lB, hB);
                            rect(xC, yC, lC, hC);
                            choice.splice(0, 3);
                        }
                    }
                };
                //CHEATING
                cheating();
            }
        };

        size(400, 400);
        frameRate(30);

        //PROGRAM CODE
        scene1();

        scene = 1;

        var mouseClicked = function () {
            //back button
            if (mouseX >= 5 && mouseX <= 55 && mouseY >= 365 && mouseY <= 395) {
                if (scene === 2) {
                    scene1();
                } else if (scene === 3) {
                    scene2();
                } else if (scene === 4) {
                    scene3();
                } else if (scene === 5) {
                    scene4();
                } else if (scene === 6) {
                    scene5();
                } else if (scene === 7) {
                    scene6();
                } else if (scene === 8) {
                    scene7();
                }
            }
            //play button
            if (mouseX >= 275 && mouseX <= 325 && mouseY >= 365 && mouseY <= 395) {
                if (scene === 1) {
                    scene = 9;
                }
                if (scene > 8) {
                    background(255, 255, 255);
                }
                if (scene === 9) {
                    scene9();
                }
            }
            //next button
            if (mouseX >= 345 && mouseX <= 395 && mouseY >= 365 && mouseY <= 395) {
                if (scene === 1) {
                    scene2();
                } else if (scene === 2) {
                    scene3();
                } else if (scene === 3) {
                    scene4();
                } else if (scene === 4) {
                    scene5();
                } else if (scene === 5) {
                    scene6();
                } else if (scene === 6) {
                    scene7();
                } else if (scene === 7) {
                    scene8();
                } else if (scene === 8) {
                    scene = 9;
                }

                if (scene > 8) {
                    background(255, 255, 255);
                }

                if (scene === 9) {
                    scene9();
                }
            }
        };
    }
};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("myCanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);