import java.io.File
import kotlin.math.round

fun main() {

    val content = File("src/input.txt").readLines();
    val abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // PART ONE
    var prioritySum = 0;

    content.forEach { line ->
        val comp1 = line.substring(0, round((line.length/2).toDouble()).toInt());
        val comp2 = line.substring(round((line.length/2).toDouble()).toInt(), line.length);

        for(i in line.indices) {
            if(comp1[i] in comp2) {
                prioritySum += abc.indexOf(comp1[i])+1;
                break;
            }
        }
    }
    println("PRIORITY SUM: $prioritySum");

    var badgeSum = 0;

    // PART TWO
    content.forEachIndexed { index, sack ->
        if(index%3 == 0) {
            val sack2 = content[index+1];
            val sack3 = content[index+2];

            for(i in sack.indices) {
                if(sack[i] in sack2 && sack[i] in sack3) {
                    badgeSum += abc.indexOf(sack[i])+1;
                    break;
                }
            }
        }
    }

    println("BADGE SUM: $badgeSum");
}