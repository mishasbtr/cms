CREATE TABLE Ingredient
(
    IdIngredient    serial         NOT NULL,
    Name            varchar(100) NOT NULL,
    Kcal            int            NOT NULL,
    CONSTRAINT Ingredient_pk PRIMARY KEY (IdIngredient)
);

INSERT INTO Ingredient (Name, Kcal) VALUES ('Mayonnaise', 680);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Ground beef', 332);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Potato', 77);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Potato chips', 536);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Chicken thighs', 177);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Chocolate', 546);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Tomato', 24);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Sugar', 387);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Bread', 265);
INSERT INTO Ingredient (Name, Kcal) VALUES ('Apple', 52);

