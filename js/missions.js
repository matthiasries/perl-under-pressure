/* 
   
  Missionfile
    
  Appends new missions to the missions array
  
 
*/

(function () { 
var newmissions							      = [{ 
										'name' : 'Level1',
										'description' : 'Replace the function with your own version. If the first function parameter is a integer, double it and then return it. Else return undef. \nYou could use regex or a function from Math::BigInt that is allready exported',
										'sourceheader' : 'my $test_count = 0;\n sub ok {\n my ( $boolean, $errorMessage, $successMessage ) = @_;\n $test_count++;\nif ( $boolean == 1 ){\n say "Test $test_count Successfull. $successMessage";\n } else {\n warn "Error on Test $test_count. $errorMessage"; \n die 1;\n };\n };\n sub like {\n my $returnValue = shift;\n my $condition = shift;\n if ( $returnValue == $condition ){\n ok(1, @_);\n } else {\n ok(0, @_);\n };\n };\n sub Math::BigInt::looks_like_number {\n local $_ = shift;\n\n #th::BigInt::looks_like_number checks from perlfaq4\n return 0 if !defined($_);\n return 1 if (/^[+-]?[0-9]+$/); # is a +/- integer\n return 1 if (/^([+-]?)(?=[0-9]|\\.[0-9])[0-9]*(\\.[0-9]*)?([Ee]([+-]?[0-9]+))?$/); # a C float\n return 1 if ($] >= 5.008 and /^(Inf(inity)?|NaN)$/i) or ($] >= 5.006001 and /^Inf$/i);\n\n 0;\n}\n \n sub Math::BigInt::is_int {\n return 0 if !(Math::BigInt::looks_like_number($_[0]));\n return $_[0] =~ m/^[+-]?\\d+$/;\n }\n \n sub is_int { Math::BigInt::is_int(@_)}\n ',
										'template' : '# Math::BigInt; is loaded\nsub doubleInteger {\n      my $i = shift;\n    # if $i is integer double it and return it. if not its not an integer then return undef\n      return $i;\n};',
										'hint' : 'https://metacpan.org/module/Math::BigInt',
										'solution': '# returnes the doubled value of an integer.\n#  @param one int number\n#  @return int or undef\nsub doubleInteger {\n	my $i = shift;\nif ( is_int($i) ){\n	return $i*2;    }else {\n        return undef\n    };\n}',
										'testcase': 'like( doubleInteger(1), 2, "Parameter was \'1\' expected return value \'2\' ", "Parameter \'1\' and return value \'2\'");\nlike( doubleInteger(\'a\'), \'b\', "Parameter was \'a\' expected return value undef ", "Parameter \'a\' and return value undef");\nlike( doubleInteger(100), 200, "Parameter was \'100\' expected return value \'200\' ", "Parameter \'100\' and return value \'200\'");\nlike( doubleInteger(0.001),undef, "Parameter was \'0.001\' expected return value undef","Parameter \'0.001\' and return value undef");\nlike( doubleInteger([1,2]),undef, "Parameter was [1,2] expected return value undef ", "Parameter [1,2] and return value undef");\nlike( doubleInteger("1a"), undef, "Parameter was \'1a\' expected return value undef ", "Parameter \'1a\' and return value undef");\nlike( doubleInteger(65e3), 13e4, "Parameter was 65e3 (65000) expected return value 13e4 (130000) ", " Parameter was 65e3 (65000) return value 13e4 (130000)");',
										'startclock' : true
										},
									];
// Append Missions
for ( i in newmissions ){
  missions.push(newmissions[i]);
}
})();