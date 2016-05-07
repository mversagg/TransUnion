import java.util.Comparator;
import java.util.Collections;
import java.util.ArrayList;

public class SimDataDriver
{

    public static void main(String[] args)
    {
    	//set up the arraylist for holding all data
    	ArrayList<SimData> data = new ArrayList<SimData>();

		addDataRyan(data);
		addDataJules(data);

		Collections.sort(data, new SimData());

		//now loop through and print the data
		for(int i = 0; i < data.size(); i++)
		{
			data.get(i).printObj();
		}

		System.out.println("Working bitch");

    }

    public static void addDataRyan(ArrayList<SimData> d)
    {
    	d.add(new SimData("Start College", "Add Student Loan", -10));
    	d.add(new SimData("Graduate College", "LOANS Due", 5));
    	d.add(new SimData("Graduate College", "LOANS on Time", 30));
    	d.add(new SimData("Graduate College", "LOANS 30 Days Late", -30));
    	d.add(new SimData("New Job Higher Income", "Buy Car", -10));
    	d.add(new SimData("New Job Higher Income", "Buy House", -10));
    	d.add(new SimData("New Job Higher Income", "Pay Down Debt", 100));
    	d.add(new SimData("New Job Lower Income", "Defualt on Loan", -100));
    	d.add(new SimData("New Job Lower Income", "File Bankrupt", -100));
    	d.add(new SimData("New Job Lower Income", "Go to Collections", -100));
    	d.add(new SimData("New Job Lower Income", "Late 30 Days", -30));
    	d.add(new SimData("New Job Lower Income", "Late 60 Days", -60));
    	d.add(new SimData("New Job Lower Income", "Late 90 Days", -90));
    	d.add(new SimData("Unexpected Medical Exspense", "Pay Exspense", 55));
    	d.add(new SimData("Unexpected Medical Exspense", "Go To Collections", -100));
    	d.add(new SimData("Unexpected Medical Exspense", "Max Existing Credit", -46));
    	d.add(new SimData("Unexpected Medical Exspense", "Seek Loans", -10));
    }

    public static void addDataJules(ArrayList<SimData> d)
    {
    	d.add(new SimData("Bad Spouse Credit", "Effects Score", -40));
    	d.add(new SimData("Bad Spouse Credit", "No Effect", 0));
    	d.add(new SimData("Amazing Spouse Credit", "Effects Score", 40));
    	d.add(new SimData("Amazing Spouse Credit", "No Effect", -0));
    	d.add(new SimData("Big Mortgage", "Home Equity Line", -6));
    	d.add(new SimData("Big Mortgage", "Default or Foreclosure", -188));
    	d.add(new SimData("Divorce", "No Effect Score", 0));
    	d.add(new SimData("Divorce", "Ex Trashes Credit", -120));
    	d.add(new SimData("Win Large Sum", "No Effect", 0));
    	d.add(new SimData("Bankrupt", "BANKRUPT", -175));
    	d.add(new SimData("Zombie Apocalypse", "Credit Is Irrelevant", 0));
    	d.add(new SimData("Identiy Theft", "Thief Opens Credit", -100));
    	d.add(new SimData("DUI", "No Effect", 0));
    	d.add(new SimData("Breach At Netflix", "Possible Identity Stolen", 0));
    	d.add(new SimData("Breach At Netflix", "Possible Credit Card Info Stolen", -20));
    	d.add(new SimData("Forgot To Shred Mail", "Identity Stolen", -30));
    	d.add(new SimData("Stolen Debit Card", "Reported", 0));
    	d.add(new SimData("Stolen CC", "Credit Limit Maxed", -35));
    	d.add(new SimData("Bad_Waiter", "Reported", 0));
    	d.add(new SimData("Misuse-Pii", "Take Selfie With Drivers License", -20));
        
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