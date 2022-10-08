#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(){
	int number,guess,nguesses=1;
	srand(time(0));
	number=rand()%100 + 1;   //Generate a random no from 1 to 100.
	
//	printf("The no is %d\n",number);
	
	//Loop running until the number is guessed
	do{
		printf("\nGuess the number from 1 to 100!\n");
		scanf("%d",&guess);
		if(guess>number){
			printf("Lower number please!");
		}
		else if(guess<number){
			printf("Higher number please!");
		}
		else{
			printf("Well Done. You guessed it in %d attempts !!! \n",nguesses);
		}
		nguesses++;
	}while(guess!=number);
	
	return 0;
}
