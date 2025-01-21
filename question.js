

//Array of Objects

const quiz = [
    {
        "q": "1. Определить общий вид дифференциального уравнения первого порядка",
        "options": [
            "F(x, y, y') = 0",
            "y' + P(x)y = Q(x)",
            "dy/dx = f(x, y)",
            "M_1(x)dx + M_2(y)dy = 0"
        ],
        "answer": 0
    },
    {
        "q": "2. Определите задачу Коши для дифференциального уравнения первого порядка",
        "options": [
            "y' = f(x, y), y(x_0) = y_0",
            "y' + P(x)y = Q(x)",
            "F(x, y, y') = 0",
            "M_1(x)dx + M_2(y)dy = 0"
        ],
        "answer": 0
    },
    {
        "q": "3. Определить дифференциальное уравнение с разделяющимися переменными",
        "options": [
            "M_1(x)dx + M_2(y)dy = 0",
            "y' = f(x, y), y(x_0) = y_0",
            "y' + P(x)y = Q(x)",
            "F(x, y, y') = 0"
        ],
        "answer": 0
    },
    {
        "q": "4. Определить дифференциальное уравнение с интегрирующим множителем",
        "options": [
            "M_1(x)N_1(y)dx + M_2(y)N_2(y)dy = 0",
            "y' + P(x)y = Q(x)",
            "F(x, y, y') = 0",
            "y' = f(x, y), y(x_0) = y_0"
        ],
        "answer": 0
    },
    {
        "q": "5. Определить общий вид линейного дифференциального уравнения первого порядка",
        "options": [
            "y' + P(x)y = Q(x)",
            "M_1(x)dx + M_2(y)dy = 0",
            "F(x, y, y') = 0",
            "y' = f(x, y), y(x_0) = y_0"
        ],
        "answer": 0
    },
    {
        "q": "6. Определить симметрию функции f(x) = sqrt(x^2 + y^2)",
        "options": [
            "1-го измерения",
            "2-го измерения",
            "3-го измерения",
            "Нет симметрии"
        ],
        "answer": 0
    },
    {
        "q": "7. Определить симметрию функции f(x, y) = k / (x^2 + y^2)",
        "options": [
            "Не имеет измерения",
            "Имеет симметрию по x",
            "Имеет симметрию по y",
            "Имеет симметрию по x и y"
        ],
        "answer": 0
    },
    {
        "q": "8. Определить вид функции с двумя переменными f(x, y)",
        "options": [
            "f(x, y) = φ(x^2 + y^2) + φ(x^2)",
            "f(x, y) = φ(x) + φ(y)",
            "f(x, y) = x^2 + y^2",
            "f(x, y) = x + y"
        ],
        "answer": 0
    },
    {
        "q": "9. Какую замену применяют при решении однородной дифференциальной уравнения первого порядка?",
        "options": [
            "z = y/x",
            "z = x/y",
            "z = y + x",
            "z = x - y"
        ],
        "answer": 0
    },
    {
        "q": "10. Какую замену надо применять, если уравнение имеет вид: dy/dx = (a(ax + by + c))/(bx + dy + e)?",
        "options": [
            "x = α + u, y = β + v",
            "x = u/v, y = u - v",
            "x = αv, y = βu",
            "x = α - v, y = β + u"
        ],
        "answer": 0
    },
    {
        "q": "11. Какую замену надо применять, если Δ ≠ 0 в уравнении dy/dx = f((ax + by + c)/(cx + dy + e))?",
        "options": [
            "y = ax + by",
            "y = bx + ay",
            "y = cx + d",
            "y = dx + c"
        ],
        "answer": 0
    },
    {
        "q": "12. Какое уравнение имеет решение вида: y₁ = e^x, y₂ = e^(4x)?",
        "options": [
            "y'' - 5y' + 4y = 0",
            "y'' + 5y' - 4y = 0",
            "y'' - 5y' - 4y = 0",
            "y'' + 5y' + 4y = 0"
        ],
        "answer": 0
    },
    {
        "q": "13. Какое уравнение имеет решение вида: y₁ = e^(2x), y₂ = e^(5x)?",
        "options": [
            "y'' - 7y' + 10y = 0",
            "y'' + 7y' - 10y = 0",
            "y'' - 7y' - 10y = 0",
            "y'' + 7y' + 10y = 0"
        ],
        "answer": 0
    },
    {
        "q": "14. Определите дифференциальное уравнение Бернулли.",
        "options": [
            "y' + P(x)y = Q(x)y^2",
            "y' + P(x)y = Q(x)",
            "y' = P(x)y^n",
            "y'' + P(x)y = Q(x)y^n"
        ],
        "answer": 0
    },
    {
        "q": "15. Какое уравнение сводится к дифференциальному уравнению Бернулли?",
        "options": [
            "Линейное уравнение",
            "Квадратичное уравнение",
            "Однородное уравнение",
            "Неоднородное уравнение"
        ],
        "answer": 0
    },
    {
        "q": "16. Найдите общее решение дифференциального уравнения: y'' - 10y' + 25y = 0",
        "options": [
            "y = C₁e^(10x) + C₂e^(10x)",
            "y = (C₁ + C₂x)e^(5x)",
            "y = C₁e^(5x) + C₂xe^(5x)",
            "y = C₁xe^(5x) + C₂e^(10x)"
        ],
        "answer": 1
    },
    {
        "q": "17. Какому уравнению сводится дифференциальное уравнение Бернулли?",
        "options": [
            "Линейное уравнение",
            "Однородное уравнение",
            "Квадратичное уравнение",
            "Неоднородное уравнение"
        ],
        "answer": 0
    },
    {
        "q": "18. Какую замену применяют при решении дифференциального уравнения Бернулли?",
        "options": [
            "z = y^(x) + z",
            "z = y^n",
            "z = 1/y",
            "z = y/x"
        ],
        "answer": 0
    },
    {
        "q": "19. Определить необходимое и достаточное условие для уравнения в полных дифференциалах",
        "options": [
            "∂N/∂x = ∂M/∂y",
            "M(x, y)dx = N(x, y)dy",
            "M(x, y) + N(x, y) = 0",
            "M(x, y)dy = N(x, y)dx"
        ],
        "answer": 0
    },
    {
        "q": "20. Какое уравнение имеет решение вида y₁ = e^x, y₂ = e^(2x)?",
        "options": [
            "y'' - 3y' + 2y = 0",
            "y'' + 3y' - 2y = 0",
            "y'' - 3y' - 2y = 0",
            "y'' + 3y' + 2y = 0"
        ],
        "answer": 0
    },
    {
        "q": "21. Определить условия существования решения задачи Коши",
        "options": [
            "f(x, y) — непрерывная",
            "f(x, y) — ограниченная",
            "f(x, y) — интегрируемая",
            "f(x, y) — дифференцируемая"
        ],
        "answer": 0
    },
   {
        "q": "22. Уравнение взаимодействия между собой независимых переменных",
        "options": [
            "Дифференциальное уравнение",
            "Частное дифференциальное уравнение",
            "Уравнение с разделяющимися переменными",
            "Линейное дифференциальное уравнение"
        ],
        "answer": 0
    },
    {
        "q": "23. Если независимая переменная зависит только от одной переменной, то уравнение называется",
        "options": [
            "Обыкновенное",
            "Частное",
            "Неоднородное",
            "Линейное"
        ],
        "answer": 0
    },
    {
        "q": "24. Определить уравнение Эйлера",
        "options": [
            "x^2y'' - xy' + y = 0",
            "y'' + xy' = x^2",
            "xy'' - y' + x^2y = 0",
            "x^3y' + y = x"
        ],
        "answer": 0
    },
    {
        "q": "25. Определить тип уравнения y + y cos(x) = x",
        "options": [
            "Линейное",
            "Частное",
            "Обыкновенное",
            "Неоднородное"
        ],
        "answer": 0
    },
    {
        "q": "26. Определить порядок уравнения x^3y' + 3y + x^5 = 0",
        "options": [
            "Дифференциальное уравнение первого порядка",
            "Дифференциальное уравнение второго порядка",
            "Дифференциальное уравнение третьего порядка",
            "Дифференциальное уравнение четвёртого порядка"
        ],
        "answer": 0
    },
    {
        "q": "27. Определить тип уравнения y^2(d^2z/dx^2) + x(dz/dx) = 0",
        "options": [
            "Частным приизпод",
            "Обыкновенное дифференциальное уравнение",
            "Частное дифференциальное уравнение",
            "Неоднородное дифференциальное уравнение"
        ],
        "answer": 0
    },
    {
        "q": "28. Решить уравнение y'' - 4y' + 8y = 0",
        "options": [
            "y = e^(2x)(C₁ cos(x) + C₂ sin(x))",
            "y = e^(4x)(C₁ cos(x) + C₂ sin(x))",
            "y = e^(2x)(C₁ + C₂ sin(x))",
            "y = e^(2x)(C₁ cos(x) + C₂)"
        ],
        "answer": 0
    },
    {
        "q": "29. Решить уравнение: y''' - y'' - 9y' + 9y = 0. Найти общее решение.",
        "options": [
            "y = C₁e^x + C₂e^{-3x} + C₃e^{3x}",
            "y = C₁e^{2x} + C₂e^{-3x} + C₃e^{4x}",
            "y = C₁e^x + C₂e^{2x} + C₃e^{-x}",
            "y = C₁e^{-x} + C₂e^{-2x} + C₃e^{3x}"
        ],
        "answer": 0
    },
    {
        "q": "30. Решить уравнение: y'' + 2y = 0. Найти общее решение.",
        "options": [
            "y = C₁ + C₂e^{-2x}",
            "y = C₁e^{2x} + C₂e^{-2x}",
            "y = C₁ + C₂e^{x}",
            "y = C₁e^{2x} + C₂e^{x}"
        ],
        "answer": 0
    },
    {
        "q": "31. Решить уравнение: y'' + 2y = 0. Найти общее решение.",
        "options": [
            "y = C₁ + C₂e^{-2x}",
            "y = C₁e^{2x} + C₂e^{-2x}",
            "y = C₁ + C₂e^{x}",
            "y = C₁e^{2x} + C₂e^{x}"
        ],
        "answer": 0
    },
    {
        "q": "32. Решить уравнение: y'' + 4y' + 5y = 0. Найти общее решение.",
        "options": [
            "y = e^{-2x}(C₁cos x + C₂sin x)",
            "y = e^{2x}(C₁cos x + C₂sin x)",
            "y = e^{-x}(C₁cos 2x + C₂sin 2x)",
            "y = e^{x}(C₁cos x + C₂sin x)"
        ],
        "answer": 2
    },
    {
        "q": "33. Каким является следующая задача: y'' + 3y' = x, y'(0) = 3, y''(0) = 2?",
        "options": [
            "Задача Коши",
            "Дифференциальное уравнение Бернулли",
            "Обыкновенное дифференциальное уравнение",
            "Уравнение Лагранжа"
        ],
        "answer": 0
    },
    {
        "q": "34. Определить тип уравнения: (xcos y - y²)dy + (sin y + x)dx = 0.",
        "options": [
            "В полных дифференциалах",
            "Линейное",
            "Неоднородное",
            "Обыкновенное"
        ],
        "answer": 0
    },
    {
        "q": "35. Как называется уравнение: y' + P(x)y = Q(x)yⁿ?",
        "options": [
            "Уравнение Бернулли",
            "Уравнение Эйлера",
            "Линейное уравнение",
            "Частное дифференциальное уравнение"
        ],
        "answer": 0
    },
    {
        "q": "36. Какое уравнение имеет общее решение: y = C₁e^{-2x} + C₂e^4x?",
        "options": [
            "y'' - 2y' - 8y = 0",
            "y'' + 2y' - 8y = 0",
            "y'' - 2y' + 8y = 0",
            "y'' + 2y' + 8y = 0"
        ],
        "answer": 0
    },
    {
        "q": "37. Определить общий вид дифференциального уравнения первого порядка.",
        "options": [
            "a(x)y + b(x)y' = c(x)",
            "y'' + P(x)y = Q(x)",
            "a(x)y' + b(x)y'' = c(x)",
            "a(x)y + b(x)y'' = c(x)"
        ],
        "answer": 0
    },
    {
        "q": "38. Определить дифференциальное уравнение Бернулли.",
        "options": [
            "x + b(y)x = c(y)xⁿ",
            "x + y = c(y)",
            "x² + b(y)x = c(y)x²",
            "x² + b(y)x = c(y)"
        ],
        "answer": 0
    },
    {
        "q": "39. Найти общее решение дифференциального уравнения: y'' + 3y' + 2y = 0.",
        "options": [
            "y = C₁e^{-x} + C₂e^{-2x}",
            "y = C₁e^{x} + C₂e^{-2x}",
            "y = C₁e^{2x} + C₂e^{-x}",
            "y = C₁e^{-2x} + C₂e^{x}"
        ],
        "answer": 0
    },
    {
        "q": "40. Определить линейное неоднородное дифференциальное уравнение.",
        "options": [
            "x' = 2x + y, y' = 3x + 4y",
            "x' = 2x, y' = 4y",
            "x' = 3x + y, y' = 2x + 4y",
            "x' = 2x + 3y, y' = 4x"
        ],
        "answer": 0
    },
    {
        "q": "41. Определить вид однородного дифференциального уравнения.",
        "options": [
            "x' = 2x + y, y' = 3x + 4y",
            "x' = 2x, y' = 4y",
            "x' = 3x + y, y' = 2x + 4y",
            "x' = 2x + 3y, y' = 4x"
        ],
        "answer": 0
    },
    {
        "q": "42. Найти общее решение дифференциального уравнения: y''' = 6.",
        "options": [
            "y = x^3 + (C₁x^2)/2 + C₂x + C₃",
            "y = x^3 + C₁x^2 + C₂x + C₃",
            "y = x^3 + (C₁x^2)/3 + C₂x + C₃",
            "y = x^2 + (C₁x^2)/2 + C₂x + C₃"
        ],
        "answer": 0
    },
    {
        "q": "43. Какую замену применить, чтобы привести уравнение к однородному виду: y' = (2x + y - 5) / (x - 2)?",
        "options": [
            "x = x₁ + 2, y = y₁ - 3",
            "x = x₁ - 1, y = y₁ + 2",
            "x = x₁ - 2, y = y₁ + 1",
            "x = x₁ + 3, y = y₁ - 1"
        ],
        "answer": 2
    },
    {
        "q": "44. Какую замену применить, чтобы привести уравнение к однородному виду: y = (x + y + 1) / (2x + 2y)?",
        "options": [
            "x + y + 1 = u",
            "x - y = u",
            "y - x = u",
            "x + 2y = u"
        ],
        "answer": 0
    },
    {
        "q": "45. Какую замену применить, чтобы привести уравнение к однородному виду: y = (x - 2y + 1) / (y - 1)?",
        "options": [
            "x = x₁ + 3, y = y₁ - 2",
            "x = x₁ - 1, y = y₁ + 1",
            "x = x₁ + 2, y = y₁ - 3",
            "x = x₁ - 2, y = y₁ + 3"
        ],
        "answer": 1
    },
    {
        "q": "46. Какую замену применить, чтобы привести уравнение к однородному виду: y' = (x - y - 3) / (x - 2y)?",
        "options": [
            "x = x₁ - 2, y = y₁ + 1",
            "x = x₁ + 2, y = y₁ - 1",
            "x = x₁ - 3, y = y₁ + 2",
            "x = x₁ + 1, y = y₁ + 3"
        ],
        "answer": 1
    },
    {
        "q": "47. Какое уравнение можно привести к однородному виду?",
        "options": [
            "y = (2x - y - 5) / (x + 2y)",
            "y = x + y",
            "y = x^2 + 2y",
            "y = 2x + 2y"
        ],
        "answer": 0
    },
    {
        "q": "48. Какую замену нужно применить, чтобы привести уравнение к однородному виду: y = (x - 5y + 4) / (x - y)?",
        "options": [
            "x = x₁ + 1, y = y₁ + 1",
            "x = x₁ - 1, y = y₁ - 1",
            "x = x₁ + 2, y = y₁ + 2",
            "x = x₁ - 2, y = y₁ - 2"
        ],
        "answer": 0
    },
    {
        "q": "49. Какую замену нужно применить, чтобы привести уравнение y = (3x + 3y - 4) / (x + y - 1)?",
        "options": [
            "x + y - 1 = u",
            "x + y + 1 = u",
            "x - y - 1 = u",
            "x - y + 1 = u"
        ],
        "answer": 0
    },
    {
        "q": "50. Какое уравнение можно привести к однородному уравнению с помощью замены: x = x₁ + 1, y = y₁ + 1?",
        "options": [
            "y' = (x + y - 2) / (x - 3y + 1)",
            "y' = (x - 4y + 5) / (x + y - 1)",
            "y' = (x - 2y + 3) / (x + 3y - 2)",
            "y' = (2x - y + 1) / (x - y - 2)"
        ],
        "answer": 2
    },
    {
        "q": "51. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ + 1, y = y₁ + 1?",
        "options": [
            "y' = (x - 5y + 4) / (x - y)",
            "y' = (x + y + 4) / (x + y)",
            "y' = (x - 2y + 4) / (x - y)",
            "y' = (x + y - 4) / (x - y)"
        ],
        "answer": 0
    },
    {
        "q": "52. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ - 1, y = y₁ - 1?",
        "options": [
            "y' = (x - y + 3) / (x - y - 2)",
            "y' = (x + y - 2) / (x - y + 1)",
            "y' = (x + 2y - 1) / (x - 2y - 3)",
            "y' = (2x - y + 1) / (x - 2y)"
        ],
        "answer": 2
    },
    {
        "q": "53. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ + 2, y = y₁ - 2?",
        "options": [
            "y' = (2x + y - 2) / (x - 2)",
            "y' = (x + 2y - 2) / (x - 2)",
            "y' = (x + y + 2) / (x - 2)",
            "y' = (2x - y - 2) / (x - 2)"
        ],
        "answer": 0
    },
    {
        "q": "54. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ - 2, y = y₁ + 1?",
        "options": [
            "y' = (x + 2y) / (x + y + 1)",
            "y' = (x + y) / (x + y + 1)",
            "y' = (2x + y) / (x + y + 1)",
            "y' = (x - y) / (x + y + 1)"
        ],
        "answer": 0
    },
    {
        "q": "55. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ + 2, y = y₁ - 1?",
        "options": [
            "y' = (2x + y - 5) / (x + 2y)",
            "y' = (2x + y + 1) / (3x + y)",
            "y' = (2x + y - 1) / (3x + 2y)",
            "y' = (x + y - 1) / (3x + 2y)"
        ],
        "answer": 0
    },
    {
        "q": "56. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ - 2, y = y₁ + 3?",
        "options": [
            "y' = (2x + y + 1) / (3x + 2y)",
            "y' = (x + y + 1) / (3x + y)",
            "y' = (2x + y + 1) / (3x + y)",
            "y' = (x + y - 1) / (3x + y)"
        ],
        "answer": 0
    },
    {
        "q": "57. Какое уравнение можно привести к однородному виду с помощью замены x = x₁ - 2, y = y₁ - 1?",
        "options": [
            "y' = (x + 2y + 5) / (x + y + 1)",
            "y' = (x + y + 3) / (2x + y + 4)",
            "y' = (3x + y + 2) / (2x + y + 1)",
            "y' = (x + 3y + 2) / (x + 2y + 4)"
        ],
        "answer": 1
    },
    {
        "q": "58. Определить уравнение Клеро:",
        "options": [
            "x = yx' + sin(x)",
            "x = yx' + cos(x)",
            "x = y + x'",
            "x = y'x + cos(x)"
        ],
        "answer": 0
    },
    {
        "q": "59. Определить уравнение Эйлера:",
        "options": [
            "x^2y'' - 2xy' + 3y = 0",
            "x^2y'' + 2xy' + 3y = 0",
            "x^2y'' - xy' + 3y = 0",
            "x^2y'' + xy' - 3y = 0"
        ],
        "answer": 0
    },
    {
        "q": "60. Найти общее решение уравнения: y' = 3y / x.",
        "options": [
            "y = Cx^3",
            "y = C / x^3",
            "y = Cx^(-3)",
            "y = Ce^(3x)"
        ],
        "answer": 0
    },
    {
        "q": "61. Найти общее решение уравнения: y'' + 64y = 0.",
        "options": [
            "y = C₁ cos(8x) + C₂ sin(8x)",
            "y = C₁ cos(64x) + C₂ sin(64x)",
            "y = C₁ cos(4x) + C₂ sin(4x)",
            "y = C₁ cos(x) + C₂ sin(x)"
        ],
        "answer": 0
    },
    {
        "q": "62. Определить порядок уравнения: x^3y''' + x^2y + x^3 = 0.",
        "options": [
            "Первый порядок",
            "Второй порядок",
            "Третий порядок",
            "Четвёртый порядок"
        ],
        "answer": 2
    },
    {
        "q": "62. Найти тип уравнения: y - 2xy' + sin(y') = 0.",
        "options": [
            "Уравнение Лагранжа",
            "Уравнение Клеро",
            "Уравнение Эйлера",
            "Линейное уравнение"
        ],
        "answer": 0
    },
    {
        "q": "63. Определить тип уравнения: y' = k(y).",
        "options": [
            "Первый порядок",
            "Второй порядок",
            "Третий порядок",
            "Неопределённый порядок"
        ],
        "answer": 0
    },
    {
        "q": "64. Определить тип уравнения: y' = k(y).",
        "options": [
            "Первый порядок",
            "Второй порядок",
            "Третий порядок",
            "Неопределённый порядок"
        ],
        "answer": 0
    },
    {
        "q": "65. Определить дифференциальное уравнение с разделяющимися переменными:",
        "options": [
            "(1 - e^(2x)) y dx = e^x dy",
            "(1 + e^(2x)) y dx = e^x dy",
            "(1 - e^x) y dx = e^x dy",
            "(1 - e^(x)) y dx = e^x dy"
        ],
        "answer": 0
    },
    {
        "q": "66. Определить дифференциальное уравнение с разделяющимися переменными:",
        "options": [
            "(x + 1)dy + ydx = 0",
            "(x - 1)dy + ydx = 0",
            "(x + 2)dy + ydx = 0",
            "(x)dy + ydx = 0"
        ],
        "answer": 0
    },
    //67
    {
        "q": "67. Уравнение f(x, y) называется однородным, если:",
        "options": [
            "f(tx, ty) = t^k f(x, y)",
            "f(tx, ty) = f(x, y)",
            "f(tx, ty) = t^2 f(x, y)",
            "f(tx, ty) = x^k f(x, y)"
        ],
        "answer": 0
    },
    {
        "q": "68. Найти общее решение уравнения: y'' - 16y = 0.",
        "options": [
            "y = C₁e^{4x} + C₂e^{-4x}",
            "y = C₁e^{x} + C₂e^{-4x}",
            "y = C₁e^{4x} + C₂e^{x}",
            "y = C₁e^{x} + C₂e^{x}"
        ],
        "answer": 0
    },
    {
        "q": "69. Найти частное решение уравнения: y'' + y' = 3x^2 - 6.",
        "options": [
            "y = x^3 - 3x^2",
            "y = x^2 + 3x^2",
            "y = x^3 + x^2",
            "y = x^3 - 2x^2"
        ],
        "answer": 0
    },
    {
        "q": "70. Определить однородное дифференциальное уравнение:",
        "options": [
            "y' = (x^2y + y^3) / (x^3 + x^2y)",
            "y' = (x^2y + y^3) / (x^2 + x^2y)",
            "y' = (x^3y + y^3) / (x^3 + x^2y)",
            "y' = (x^2y + xy^2) / (x^3 + x^2y)"
        ],
        "answer": 0
    },
    {
        "q": "71. Найти решение уравнения: y' + 2y = x.",
        "options": [
            "y = Ce^{-2x} + (1/3)e^x",
            "y = Ce^{2x} - (1/3)e^x",
            "y = Ce^{x} + (1/3)e^{-x}",
            "y = Ce^{-x} + (1/3)e^x"
        ],
        "answer": 0
    },
    {
        "q": "72. Найти общее решение уравнения: x^2y' + (x^2 - 3y^2)dy = 0.",
        "options": [
            "x^3y - y^3 = C",
            "x^3 + y^3 = C",
            "x^3y + y^3 = C",
            "x^3 - 3y^3 = C"
        ],
        "answer": 0
    },
    {
        "q": "73. Найти общее решение уравнения: y'' + 9y' = 0.",
        "options": [
            "y = C₁ + C₂e^{-2x}",
            "y = C₁e^{-x} + C₂e^{x}",
            "y = C₁e^{-x} + C₂e^{-2x}",
            "y = C₁ + C₂e^{-x}"
        ],
        "answer": 0
    },
    {
        "q": "74. Определить линейное дифференциальное уравнение первого порядка:",
        "options": [
            "a(x)y + b(x)y' = c(x)",
            "y' + ay = c",
            "a(x)y = c(x)",
            "b(x)y' = a(x)"
        ],
        "answer": 0
    },
    {
        "q": "75. Определить уравнение Бернулли:",
        "options": [
            "x' + b(y)x = c(y)x^n",
            "x' + b(x)x = c(x)x^n",
            "x' - b(y)x = c(y)x^n",
            "x' + b(y)x = c(y)"
        ],
        "answer": 0
    },
    //76
    {
        "q": "76. Найти общее решение уравнения: y' = x - y.",
        "options": [
            "y = Ce^{x - 2}",
            "y = Ce^{-x - 2}",
            "y = Cx + e^{x}",
            "y = Cx - e^{x}"
        ],
        "answer": 0
    },
    //77
    {
        "q": "77. Найти общее решение уравнения: y' = x - y.",
        "options": [
            "y = Ce^{x - 2}",
            "y = Ce^{-x - 2}",
            "y = Cx + e^{x}",
            "y = Cx - e^{x}"
        ],
        "answer": 0
    },
    {
        "q": "78. Найти общее решение уравнения: 2y - xy' = 0.",
        "options": [
            "y = Cx^2",
            "y = Cx",
            "y = Cx^3",
            "y = C"
        ],
        "answer": 0
    },
    {
        "q": "79. Решить дифференциальное уравнение: y''' - y'' - y' + y = 0.",
        "options": [
            "y = C₁e^x + e^{x}C₂x + C₃e^{-x}",
            "y = C₁e^{-x} + C₂e^x + C₃e^{2x}",
            "y = C₁e^{2x} + C₂e^{-2x} + C₃e^x",
            "y = C₁e^x + C₂e^x + C₃e^x"
        ],
        "answer": 0
    },
    {
        "q": "80. Определить дифференциальное уравнение с полным общим решением: y = C₁e^x + C₂e^{-2x}.",
        "options": [
            "y'' + 3y' + 2y = 0",
            "y'' + 2y' + 3y = 0",
            "y'' - y' + y = 0",
            "y'' + y' + y = 0"
        ],
        "answer": 0
    },
    {
        "q": "81. Решить дифференциальное уравнение: y'' + 6y' + 9y = 0.",
        "options": [
            "y = (C₁ + C₂x)e^{-3x}",
            "y = C₁e^{-3x} + C₂e^{-x}",
            "y = C₁e^x + C₂e^{-3x}",
            "y = C₁x + C₂e^{-x}"
        ],
        "answer": 0
    },
    {
        "q": "82. Решить дифференциальное уравнение: y'' + 4y = 0.",
        "options": [
            "y = C₁cos(2x) + C₂sin(2x)",
            "y = C₁cos(x) + C₂sin(x)",
            "y = C₁e^x + C₂e^{-x}",
            "y = C₁x + C₂x^2"
        ],
        "answer": 0
    },
    {
        "q": "83. Решить дифференциальное уравнение: y' = x / y.",
        "options": [
            "x = y*ln(С*y)",
            "x = y^2",
            "x = ln(y)",
            "x = y"
        ],
        "answer": 0
    },
    {
        "q": "84. Решить дифференциальное уравнение: y'' + 6y = 0.",
        "options": [
            "y = C₁ + C₂e^{-√6x}",
            "y = C₁cos(√6x) + C₂sin(√6x)",
            "y = C₁e^x + C₂e^{-x}",
            "y = C₁x + C₂x^2"
        ],
        "answer": 0
    },
    {
        "q": "85. Решить дифференциальное уравнение: y'' - 4y' + 4y = 0.",
        "options": [
            "y = e^{2x}(C₁cos(2x) + C₂sin(2x))",
            "y = C₁e^{2x} + C₂e^{-2x}",
            "y = C₁x^2 + C₂x",
            "y = C₁cos(x) + C₂sin(x)"
        ],
        "answer": 0
    },
    {
        "q": "86. Решить дифференциальное уравнение: y'' + 2y' + 5y = 0.",
        "options": [
            "y = e^-x(C₁cos(2x) + C₂sin(2x))",
            "y = C₁cos(2x) + C₂sin(2x)",
            "y = e^x(C₁cos(2x) + C₂sin(2x))",
            "y = C₁x^2 + C₂x"
        ],
        "answer": 0
    },
    {
        "q": "87. Упростить выражение: sin²x + cos²x = ?",
        "options": [
            "1",
            "0",
            "sin(x)cos(x)",
            "2sin(x)cos(x)"
        ],
        "answer": 0
    },
    {
        "q": "88. Найти общее решение уравнения: y'' + 9y = 0.",
        "options": [
            "y = C₁ + C₂e^(-9x)",
            "y = C₁e^{3x} + C₂e^{-3x}",
            "y = C₁cos(2x) + C₂sin(2x)",
            "y = C₁e^{9x} + C₂e^{-9x}"
        ],
        "answer": 0
    },
    {
        "q": "89. Найти систему линейных уравнений:",
        "options": [
            "6x + 9y + 12 = 0",
            "x + y + z = 0",
            "2x - y + z = 0",
            "x² + y² = 1"
        ],
        "answer": 0
    },
    {
        "q": "90. Найти общее решение уравнения: y'' + 16y = 0.",
        "options": [
            "y = C₁cos(4x) + C₂sin(4x)",
            "y = C₁cos(3x) + C₂sin(3x)",
            "y = C₁e^{4x} + C₂e^{-4x}",
            "y = C₁x + C₂x²"
        ],
        "answer": 0
    },
    {
        "q": "91. Найти общее решение уравнения: y'' + 4y = 0.",
        "options": [
            "y = C₁cos(2x) + C₂sin(2x)",
            "y = C₁cos(4x) + C₂sin(4x)",
            "y = C₁e^{2x} + C₂e^{-2x}",
            "y = C₁x + C₂x²"
        ],
        "answer": 0
    },
    {
        "q": "92. Найти общее решение уравнения: y' - 2y = 0.",
        "options": [
            "y = C * e^{2^x}",
            "y = C * e^{-2x}",
            "y = C * x²",
            "y = C * x"
        ],
        "answer": 0
    },
    {
        "q": "93. Найти общее решение уравнения: y'' - 6y' = 0.",
        "options": [
            "y = C₁ + C₂e^{6x}",
            "y = C₁e^{6x} + C₂e^{-6x}",
            "y = C₁x² + C₂x",
            "y = C₁ + C₂x²"
        ],
        "answer": 0
    },
    {
        "q": "94. Найти общее решение уравнения: 3y - xy' = 0.",
        "options": [
            "y = Cx³",
            "y = Cx²",
            "y = Cx",
            "y = C"
        ],
        "answer": 0
    },
    {
        "q": "95. Найти общее решение уравнения: y'' + 36y = 0.",
        "options": [
            "y = C₁cos(6x) + C₂sin(6x)",
            "y = C₁e^{6x} + C₂e^{-6x}",
            "y = C₁x + C₂x²",
            "y = C₁cos(4x) + C₂sin(4x)"
        ],
        "answer": 0
    },
    {
        "q": "96. Найти общее решение уравнения: y'' + 3y' + 4y = 1.",
        "options": [
            "y = C₁e^{-x} + C₂e^{-2x} + 1/4",
            "y = C₁e^{-3x} + C₂e^{-2x} + 1",
            "y = C₁cos(3x) + C₂sin(3x)",
            "y = C₁x + C₂x²"
        ],
        "answer": 0
    },
    {
        "q": "97. Найти линейное дифференциальное уравнение с постоянными коэффициентами, частное решение которого равно: y = x²e^{2x}.",
        "options": [
            "y'' - 4y' + 4y = 0",
            "y'' + 4y' - 2y = 0",
            "y'' - 3y' + y = 0",
            "y'' + 2y' + y = 0"
        ],
        "answer": 0
    },
    {
        "q": "98. Найти общее решение уравнения: y'' + 36y = 0.",
        "options": [
            "y = C₁cos(6x) + C₂sin(6x)",
            "y = C₁e^{6x} + C₂e^{-6x}",
            "y = C₁x + C₂x²",
            "y = C₁cos(4x) + C₂sin(4x)"
        ],
        "answer": 0
    },
    {
        "q": "99. Решить уравнение: y''' - 2y'' = 0.",
        "options": [
            "y = C₁ + C₂x + C₃xe^{2x}",
            "y = C₁e^{2x} + C₂e^{-2x}",
            "y = C₁x + C₂x²",
            "y = C₁cos(2x) + C₂sin(2x)"
        ],
        "answer": 0
    },
    {
        "q": "100. Найти общее решение уравнения: y'' + 36y' = 0.",
        "options": [
            "y = C₁e^{-36x} + C₂",
            "y = C₁cos(6x) + C₂sin(6x)",
            "y = C₁x + C₂x²",
            "y = C₁cos(4x) + C₂sin(4x)"
        ],
        "answer": 0
    }
]
