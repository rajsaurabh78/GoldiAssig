package Q5;

import java.util.*;

public class MapDemo {
//	5. Write a program to store the value in Hashmap (key, store) and then
//	search those given value from the hashmap and print it.
//	a. Name is key and age is value so store some sample values like
//	i. (Ram, 36), (shyam,60)
	
	public static void main(String[] args){
        Map<String,Integer> map=new HashMap<>();
        map.put("Ram",32);
        map.put("Shyam",60);
        map.put("Raman",30);
        map.put("Rohit",35);
        map.put("Ramu",24);
        map.put("Surabhi",16);
        
        
        
        int res=Search("Ram",map);
        if(res<0){
            System.out.println("Not present in map.");
        }else{
            System.out.println(res);
        }
        
    }
    public static int Search(String str,Map<String,Integer> map){
        if(map.containsKey(str)){
            return map.get(str);
        }
        else return -1;
    }
	
	
}
