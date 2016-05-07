import java.util.Comparator;
import java.util.Collections;
import java.util.ArrayList;

public class SimDataDriver
{

    public static void main(String[] args)
    {
    	//set up the arraylist for holding all data
    	ArrayList<SimData> data = new ArrayList<Integer>();

		data.add()

		Collections.sort(data, new SimData());

		//now loop through and print the data
		for(int i = 0; i < data.size(); i++)
		{
			data.get(i).printObj();
		}

		System.out.println("Working bitch");

    }

    public static void addDataRyan(ArrayList<Integer> d)
    {
    	d.add(new SimData("Start College", "Add Student Loan", -10));
    }

    public static void addDataJules(ArrayList<Integer> d)
    {
    	d.add(new SimData("Bad Spouse Credit", "Effects Score", -40));
    }

}

class SimData implements Comparator<SimData>
{
	public String mEvent;
	public String sEvent;
	public Integer value;

	SimData()
	{
		//do nothing, use this for creating an object to use for sorting
	}

	//the constructor used to create a object
	SimData(String mEvent, String sEvent, Integer value)
	{
		this.mEvent = mEvent;
		this.sEvent = sEvent;
		this.value = value;
	}

	//Print the object contents
	public void printObj()
	{
		System.out.println(mEvent + ", " + sEvent + ": " + value);
	}

	//this is sued to comare too objects for sorting
	public int compare(SimData d1, SimData d2)
	{
		return d2.value - d1.value;
	}


}