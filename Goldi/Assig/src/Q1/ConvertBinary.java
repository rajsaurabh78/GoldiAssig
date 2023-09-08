package Q1;

public class ConvertBinary {
	
//	1. Write a function to convert a decimal number string into binary string.
//	For example, string A contains “123” which is decimal value 123. Convert
//	this string into binary string.

	
	    public static void main(String[] args){
	        String x="4";
	        check(x);
	    }
	    public static void check(String x){
	        int N = Integer.parseInt(x);
	        String temp="";
	        if(N==0) {
	        	temp+=N;
	        }
	        while(N>0){
	            temp+=N%2;
	            N=N/2;
	        }
	        String res="";
	        for(int i=temp.length()-1;i>=0;i--){
	            res+=temp.charAt(i);
	        }
	        
	        System.out.println(res);
	    }
}
