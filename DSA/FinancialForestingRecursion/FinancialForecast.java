public class FinancialForecast {
  public static double predict(double currentValue, double growthRate, int years)
  {
    if(years == 0){
      return currentValue;
    }

    return predict(currentValue * (1 + growthRate), growthRate, years - 1);
  }
  public static void main(String[] args) {
    double currentValue = 10000.0;
    double growthRate = 0.10;
    int years = 5;

    double futureValue = predict(currentValue, growthRate, years);
    System.out.printf("Predicted value after %d years = %.2f%n", years, futureValue);
  }
}